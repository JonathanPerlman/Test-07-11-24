import { useState, useEffect } from 'react';
import building from "../data/building.json"

interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity:string
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);

  //FILL HERE LOGIC TO SET THE BUILDING DATA
  useEffect(() => {
    setBuildingData(building); 
  }, []);


  const getFloorByIndex = (floorIndex:number): Floor |undefined =>
  {
    return buildingData[floorIndex];
  }
  const getListOfActivities = ():string[]=>{
    //FILL HERE
    return buildingData.map(floor=>floor.activity);
  }
  return { buildingData, getFloorByIndex, getListOfActivities};
};

export default useBuildingData;
