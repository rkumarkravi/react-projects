import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./Dashboard.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/Store";
import { Link } from "react-router-dom"; // Example with React Router

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: "3em",
  textAlign: "center",
  // height: "100px",
  // width: "100px",
  color: theme.palette.mode === "dark" ? theme.palette.text.secondary : "#000",
  textDecoration: "none",
}));

export default function Dashboard() {
  const programs = useSelector((state: RootState) => {
    return state.programsReducer.programs;
  });

  return (
    <div className="grid">
      {programs.map((x) => (
        <Link key={x} to={`/main/lang/${x}`}>
          <Item>{x}</Item>
        </Link>
      ))}
    </div>
  );
}
