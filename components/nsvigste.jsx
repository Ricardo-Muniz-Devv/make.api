import { use } from "react";
import { useNavigate, useNavigate } from "react-router-dom";

function AboutButton() {
    const useNavigate = useNavigate();

    const handler = () => {
        Navigate('/about');

        return <button onClick={handler}>About</button>
    }
}