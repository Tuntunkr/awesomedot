import React from "react";
import "../styles/Home.css";
import {
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Image from 'next/image'
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { articles } from "./api/index";
import { DiReact } from "react-icons/di";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { AiOutlineGithub } from "react-icons/ai";

function Home() {
  return (
    <>
      <div>
        

        <Footer />
      </div>
    </>
  );
}

export default Home;
