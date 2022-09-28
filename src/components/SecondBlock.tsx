import Image from "next/image";
import styled from "styled-components";
import ImgPerson from "../assets/images/bruno.jpg";
import ImgAdd from "../assets/images/add.png";
import ImgRun from "../assets/images/run.png";
import ImgMaps from "../assets/images/maps.png";
import ImgFollowTwo from "../assets/images/follow-two.png";
import ImgFollowersTwo from "../assets/images/followers-two.png";
import ImgStarTwo from "../assets/images/star-two.png";
import ImgRepositories from "../assets/images/repositories-two.png";
import React, { useContext } from "react";
import { ListRepositories } from "../context";

const SecondBlock = () => {
    const { infosOwner }: any = useContext(ListRepositories);

    return (
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
                    <Image width="25px" height="25px" src={ImgRun} />
                    <p>facebook</p>
                </div>
                <div>
                    <Image width="25px" height="25px" src={ImgMaps} />
                    <p>Redwood City, CA</p>
                </div>
                <div>
                    <Image width="25px" height="25px" src={ImgAdd} />
                    <p>15 june 2018</p>
                </div>
                <button>Follow</button>
            </InfosPerson>

            <InfosPersonTwo>
                <div>
                    <Image width="25px" height="25px" src={ImgRepositories} />
                    <p>Repositories</p>
                </div>
                <div>
                    <Image width="25px" height="25px" src={ImgStarTwo} />
                    <p>Stars</p>
                </div>
                <div>
                    <Image width="25px" height="25px" src={ImgFollowersTwo} />
                    <p>Followers</p>
                </div>
                <div>
                    <Image width="25px" height="25px" src={ImgFollowTwo} />
                    <p>Following</p>
                </div>
            </InfosPersonTwo>
        </>
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
