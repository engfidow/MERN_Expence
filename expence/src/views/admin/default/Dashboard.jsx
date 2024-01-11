import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";



import Widget from "components/widget/Widget";






import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [totalAmountExpense, setTotalAmountExpense] = useState(0);
  const [totalAmountIncome, setTotalAmountIncome] = useState(0);
  
  useEffect(() => {
    const fetchTotalAmountExpence = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/expenses/total');
        setTotalAmountExpense(response.data.totalAmount);
      } catch (error) {
        console.error('Error fetching total amount:', error);
      }
    };
    const fetchTotalAmountIncome = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/income/total');
        setTotalAmountIncome(response.data.totalAmount);
      } catch (error) {
        console.error('Error fetching total amount:', error);
      }
    };
    fetchTotalAmountIncome()
    fetchTotalAmountExpence();
  }, []);
  const blance = totalAmountIncome - totalAmountExpense;
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 mb-12  grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Earnings"}
          subtitle={"$340.5"}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"Spend this month"}
          subtitle={"$642.39"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Spend this Year"}
          subtitle={"$574.34"}
        />
        
      </div>

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        
        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"Your Balance"}
          subtitle={"$ " + blance}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Total Expence"}
          subtitle={"$ "+ totalAmountExpense}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Total Income"}
          subtitle={"$ "+ totalAmountIncome}
        />
      </div>

      

     
    </div>
  );
};

export default Dashboard;
