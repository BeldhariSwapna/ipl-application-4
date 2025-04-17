import { useState, useEffect } from "react";
import { getPointsTable } from "../services/api";
import LoadingSpinner from "./ui/LoadingSpinner";
export default function TeamStanding() {
    const [pointsTable, setPointsTable]=useState({});
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const fetchPointsTable=async()=>{
            try{
                const data=await getPointsTable();
                setPointsTable(data);
            }
            catch(err){
                setError("We are unable to load the data");
            }
            finally(
                setLoading(false);
            )
        };
        fetchPointsTable();
    },[]);
} 


