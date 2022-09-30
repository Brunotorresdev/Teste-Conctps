import { Box, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import ImgStarTwo from "../../assets/images/star-two.png";
import ImgShare from "../../assets/images/share.png";
import ImgAuction from "../../assets/images/auction.png";
import { api } from "../../api";
import FirstBlock from "../../components/FirstBlock";
import SecondBlock from "../../components/SecondBlock";
import { ListRepositories } from "../../context";
import React from "react";
import ImgGraph from "../../assets/images/grafich.jpeg";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { useRouter } from "next/router";

const Repositories = () => {
    const [text, setText] = useState("");
    const [isModal, setIsModal] = useState(false);
    const [isModalNotification, setIsModalNotification] = useState(false);

    const { listRepos, setListRepos, infosOwner, setInfosOwner }: any =
        useContext(ListRepositories);

    const router = useRouter();

    useEffect(() => {
        ListRepos();
    }, []);

    const ListRepos = async () => {
        const response = await api.getListRepos();
        setListRepos(response.data);
        setInfosOwner(response.data[0].owner);
    };

    return (
        <Flex maxH="897px" padding="0" margin="0" color="white">
            <Box
                position="fixed"
                bg="#3869FC"
                h="100vh"
                minW="250px"
                p="40px 0px 0px 0px"
            >
                <FirstBlock />
            </Box>
            <Box
                position="fixed"
                p="50px 30px 0 40px"
                width="350px"
                h="100vh"
                bg="#fff"
                marginLeft="250px"
            >
                <SecondBlock />
            </Box>
            <Box
                flex="1"
                bg="#fff"
                h="100vh"
                p="0px"
                width="1100px"
                marginLeft="605px"
            >
                <CardContainer>
                    <CardContainerTop>
                        <div>
                            <AiOutlineSearch color="#615c5c" size="25px" />
                            <div>
                                <DivIconTop
                                    onClick={() =>
                                        setIsModalNotification(
                                            !isModalNotification
                                        )
                                    }
                                >
                                    <BsBell size="20px" color="#000" />
                                    <IoMdArrowDropdown color="#000" />
                                    {isModalNotification && (
                                        <Modal>
                                            <p>Sem notificações</p>
                                        </Modal>
                                    )}
                                </DivIconTop>
                                <DivIconBottom
                                    onClick={() => setIsModal(!isModal)}
                                >
                                    <FaRegUser size="20px" color="#000" />
                                    <IoMdArrowDropdown color="#000" />
                                    {isModal && (
                                        <Modal>
                                            <p onClick={() => router.push("/")}>
                                                Sair da sua conta
                                            </p>
                                        </Modal>
                                    )}
                                </DivIconBottom>
                            </div>
                        </div>
                        <h1>Repositories</h1>
                        <DivInfosRepos>
                            <h2>
                                {`${listRepos.length} repositories has created so
                                far`}
                            </h2>
                            <ContainerInput>
                                <AiOutlineSearch color="#615c5c" size="25px" />
                                <input
                                    type="text"
                                    placeholder="Seach"
                                    onChange={(e) => setText(e.target.value)}
                                />
                            </ContainerInput>
                            <div>
                                <select name="" id="">
                                    <option value="">TYPE</option>
                                    <option value="">TYPE</option>
                                </select>
                                <select name="" id="">
                                    <option value="">LANGUAGE</option>
                                    <option value="">LANGUAGE</option>
                                </select>
                                <select name="" id="">
                                    <option value="">DATE</option>
                                </select>
                            </div>
                        </DivInfosRepos>
                    </CardContainerTop>
                    <CardContainerBottom>
                        {listRepos
                            .filter((val) => {
                                if (text == "") {
                                    return val;
                                } else if (
                                    val.name
                                        .toLowerCase()
                                        .includes(text.toLowerCase())
                                ) {
                                    return val;
                                }
                            })
                            .map((item, index) => (
                                <a
                                    key={index}
                                    href={item.html_url}
                                    target="blanck"
                                >
                                    <CardRepo>
                                        <CardRepoTop>
                                            <h1>{item.name}</h1>
                                            <span>
                                                {`Updated on ${item.pushed_at.slice(
                                                    8,
                                                    10
                                                )}/${item.pushed_at.slice(
                                                    5,
                                                    7
                                                )}/${item.pushed_at.slice(
                                                    0,
                                                    4
                                                )}`}
                                            </span>
                                            <p>{item.description}</p>
                                        </CardRepoTop>
                                        <Image src={ImgGraph} />
                                        <CardRepoBottom>
                                            <div>
                                                <Image
                                                    width="20px"
                                                    height="15px"
                                                    src={ImgStarTwo}
                                                />
                                                <p>9.5k</p>
                                            </div>
                                            <div>
                                                <Image
                                                    width="20px"
                                                    height="15px"
                                                    src={ImgShare}
                                                />
                                                <p>760</p>
                                            </div>
                                            <div>
                                                <Image
                                                    width="20px"
                                                    height="15px"
                                                    src={ImgAuction}
                                                />
                                                <p>MIT</p>
                                            </div>
                                        </CardRepoBottom>
                                    </CardRepo>
                                </a>
                            ))}
                        ;
                    </CardContainerBottom>
                </CardContainer>
            </Box>
        </Flex>
    );
};

export default Repositories;

const CardRepo = styled.div`
    width: 300px;
    height: 340px;
    border: 1px solid rgba(238, 235, 235, 0.75);
    color: #615c5c;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
        padding-bottom: 0 !important;
        margin-bottom: 0 !important;
    }
`;

const CardRepoTop = styled.div`
    h1 {
        font-size: 17px;
        font-weight: 500;
        color: #292727;
    }
    span {
        font-size: 14px;
    }
    p {
        font-size: 16px;
        font-weight: 400;
        margin-top: 10px;
        height: 115px;
        overflow: hidden;
    }
`;

const CardRepoBottom = styled.div`
    display: flex;
    justify-content: space-between;
    max-height: 25px;
    margin-top: -5px;
    div {
        display: flex;
        max-height: 20px;
    }
    p {
        margin: 0 !important;
        padding-left: 5px;
    }
`;

const CardContainer = styled.div`
    width: 100%;
    box-shadow: -10px 0 10px -5px rgba(238, 235, 235, 0.75);
`;

const CardContainerTop = styled.div`
    height: 280px;
    width: 100%;
    padding: 20px 30px 3px 50px;
    box-shadow: 0 5px 5px -5px #333;
    @media (max-width: 1211px) {
        height: 300px;
    }
    h1 {
        color: #000;
        margin-top: 40px;
        font-size: 26px;
    }
    div {
        display: flex;
        justify-content: space-between;
    }
    select {
        color: #000;
    }
`;

const DivInfosRepos = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 40px;
    h2 {
        color: #000;
        font-size: 22px;
        max-width: 300px;
    }
    div {
        display: flex;
        justify-content: space-between;
        max-width: 300px;
        width: 100%;
    }
    input {
        border: none;
        outline: none;
        color: #000;
    }
    select {
        color: #000;
    }
`;

const ContainerInput = styled.div`
    width: 210px !important;
    height: 25px;
`;

const CardContainerBottom = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 30px;
    box-shadow: 0 5px 5px -5px #333;
`;

const DivIconTop = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 40px;
    margin-left: 10px;
    cursor: pointer;
`;

const DivIconBottom = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 40px;
    margin-left: 10px;
    cursor: pointer;
`;

const Modal = styled.div`
    position: absolute;
    border: 2px solid black;
    width: 150px;
    left: -100px;
    top: 35px;
    display: flex;
    padding-left: 6px;
    color: #000;

    :hover {
        background-color: #3767fd;
        color: #fff;
    }
`;
