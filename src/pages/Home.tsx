import "./Home.css";
import { useEffect, useState } from "react";
import { Card, SearchForm } from "../components";
import csvtojson from "csvtojson";

export type mentor = {
  name: string;
  expertise: string;
  bio: string;
  linkedin: string;
  email: string;
  phone: string;
  engagement: string;
};

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [allMentors, setAllMentors] = useState<mentor[]>([]);
  const [filteredMentors, setFilteredMentors] = useState<mentor[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const filePath = "./database.csv";
      const response = await fetch(filePath);
      const csvString = await response.text();
      const databaseData = (await csvtojson().fromString(
        csvString
      )) as mentor[];
      setAllMentors(databaseData);
      setFilteredMentors(databaseData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm != "") {
      const searchText = searchTerm.replace(/\s/g, "").toLocaleLowerCase();
      const newMentorList = allMentors.filter((val) =>
        val.expertise.replace(/\s/g, "").toLowerCase().includes(searchText)
      );
      setFilteredMentors(newMentorList);
    }else{
      setFilteredMentors(allMentors)
    }
  }, [searchTerm]);

  return (
    <div className="Home mt-8">
      <h1 className="font-semibold text-xl mb-4">
        We seek to connect you to your ideal mentor
      </h1>
      <div className="flex justify-center items-center">
        <div className="w-full md:w-2/4">
          <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </div>

      <div className="grid sm:grid-col-2 md:grid-cols-3 gap-2 mt-12">
        {filteredMentors.map((mentor, index) => (
          <Card mentor={mentor} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Home;
