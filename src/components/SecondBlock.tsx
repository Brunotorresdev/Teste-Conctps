import Image from "next/image";
import styled from "styled-components";
import ImgPerson from "../assets/images/bruno.jpg";
import React, { useContext } from "react";
import { ListRepositories } from "../context";
import { RiRunFill } from "react-icons/ri";
import { SiGooglemaps } from "react-icons/si";
import { MdPersonAdd } from "react-icons/md";
import { RiGitRepositoryCommitsFill } from "react-icons/ri";
import { RiStarSFill } from "react-icons/ri";
import { RiUserFollowLine } from "react-icons/ri";
import { RiUserFollowFill } from "react-icons/ri";
import { IconContext } from "react-icons";

const SecondBlock = () => {
    const { infosOwner }: any = useContext(ListRepositories);

    return (
        <IconContext.Provider
            value={{
                className: "global-class-name",
                size: "25px",
            }}
        >
            <>
                <SectionUser>
                    <div
                        style={{
                            borderRadius: "50%",
                            overflow: "hidden",
                            width: "100px",
                            height: "100px",
                        }}
                    >
                        <Image src={ImgPerson} />
                    </div>
                    <br />
                    <TitlePerson>{infosOwner.login}</TitlePerson>
                    <SubTitlePerson>{`@${infosOwner.login}`}</SubTitlePerson>
                    <br />
                    <p>
                        Front-end engineer at <br />
                        Facebook.Co-creator <br />
                        Redux. Creator Recomp.
                    </p>
                    <br />
                </SectionUser>
                <InfosPerson>
                    <div>
                        <RiRunFill />
                        <p>facebook</p>
                    </div>
                    <div>
                        <SiGooglemaps />
                        <p>Redwood City, CA</p>
                    </div>
                    <div>
                        <MdPersonAdd />
                        <p>15 june 2018</p>
                    </div>
                    <button>Follow</button>
                </InfosPerson>

                <InfosPersonTwo>
                    <div>
                        <RiGitRepositoryCommitsFill />
                        <p>Repositories</p>
                    </div>
                    <div>
                        <RiStarSFill />
                        <p>Stars</p>
                    </div>
                    <div>
                        <RiUserFollowLine />
                        <p>Followers</p>
                    </div>
                    <div>
                        <RiUserFollowFill />

                        <p>Following</p>
                    </div>
                </InfosPersonTwo>
            </>
        </IconContext.Provider>
    );
};
export default SecondBlock;

const SectionUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black !important;
    text-align: center;
    div {
        max-width: 100px !important;
    }
    p {
        color: #868686;
    }
`;

const TitlePerson = styled.p`
    color: #000 !important;
    font-weight: 500;
    font-size: 18px;
`;
const SubTitlePerson = styled.p`
    color: #000;
    font-weight: 500;
    font-size: 14px;
`;

const InfosPerson = styled.div`
    color: #868686;
    margin: auto;
    margin-left: 40px;
    margin-top: 25px;
    div {
        display: flex;
        max-width: 300px;
        width: 100% !important;
        margin-bottom: 40px;
        max-height: 30px;
        align-items: center;
        p {
            margin-left: 10px;
        }
    }
    button {
        margin-top: 10px;
        margin-left: 30px;
        border: 1px solid #0a30a1;
        color: #0a30a1;
        background-color: #ffffff;
        padding: 10px 35px;
        border-radius: 30px;
        margin-bottom: 50px;
        :hover {
            color: #ffffff;
            background-color: #0a30a1;
        }
    }
`;

const InfosPersonTwo = styled.div`
    color: #868686;
    margin: auto;
    margin-left: 40px;
    margin-top: 25px;
    div {
        display: flex;
        max-width: 300px;
        width: 100% !important;
        margin-bottom: 40px;
        max-height: 30px;
        :first-child {
            color: #0a30a1;
        }

        p {
            margin-left: 20px;
        }
    }
`;
