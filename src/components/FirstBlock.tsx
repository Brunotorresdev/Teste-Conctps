import styled from "styled-components";
import Image from "next/image";
import ImgGithubTwo from "../assets/images/github-two.png";
import React, { useContext } from "react";
import { ListRepositories } from "../context";
import { SiGithubactions } from "react-icons/si";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { RiUserFollowLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { RiGitRepositoryCommitsFill } from "react-icons/ri";
import { RiStarSFill } from "react-icons/ri";
import { RiUserFollowFill } from "react-icons/ri";
import { IconContext } from "react-icons";

const FirstBlock = () => {
    const { listRepos }: any = useContext(ListRepositories);

    return (
        <IconContext.Provider
            value={{
                size: "25px",
            }}
        >
            <>
                <GroupButtons>
                    <h2>MAIN</h2>
                    <div>
                        <SiGithubactions />
                        <p>Pull request</p>
                    </div>
                    <div>
                        <AiOutlineInfoCircle />
                        <p>Issues</p>
                    </div>
                    <div>
                        <RiShoppingBasket2Fill />
                        <p>Market</p>
                    </div>
                    <div>
                        <RiUserFollowLine />
                        <p>Explore</p>
                    </div>
                </GroupButtons>
                <GroupButtons>
                    <h2>OTHER</h2>
                    <div>
                        <FaEye />
                        <p>Overview</p>
                    </div>
                    <div>
                        <RiGitRepositoryCommitsFill />
                        <p>Repositories</p>
                        <span>{listRepos.length}</span>
                    </div>
                    <div>
                        <RiStarSFill />
                        <p>Stars</p>
                    </div>
                    <div>
                        <RiUserFollowFill />
                        <p>Followers</p>
                    </div>
                </GroupButtons>
                <ImgGithubContainer>
                    <div>
                        <ImgGithubLeft width="70px" src={ImgGithubTwo} />
                    </div>
                    <h1>GitHub</h1>
                </ImgGithubContainer>
            </>
        </IconContext.Provider>
    );
};

const GroupButtons = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    h2 {
        padding-left: 15px;
        color: rgb(180, 178, 178);
        margin-bottom: 20px;
    }
    div {
        padding: 10px 0 10px 25px;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        flex-direction: row !important;
        cursor: pointer;
        :hover {
            background-color: #0a30a1;
        }
        img {
            height: 22px !important;
            width: 22px !important;
        }
        p {
            margin-left: 10px;
            margin-right: 15px;
            font-size: 18px;
        }
        span {
            background-color: #fff;
            border-radius: 50%;
            color: #000;
            font-size: 16px;
            max-height: 25px;
            width: 23px;
            padding-left: 3px;
        }
    }
`;
const ImgGithubContainer = styled.div`
    position: absolute;
    bottom: 0;
    margin-left: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    div {
        margin-left: 7px;
    }
    h1 {
        color: #ffffff;
        font-weight: bold;
        font-size: 24px;
    }
`;
const ImgGithubLeft = styled(Image)`
    width: 70px !important;
`;

export default FirstBlock;
