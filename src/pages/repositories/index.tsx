import { Box, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import ImgLupa from "../../assets/images/lupa.png";
import ImgLupaPerson from "../../assets/images/lupa-person.jpeg";
import ImgStarTwo from "../../assets/images/star-two.png";
import ImgShare from "../../assets/images/share.png";
import ImgAuction from "../../assets/images/auction.png";
import { api } from "../../api";
import FirstBlock from "../../components/FirstBlock";
import SecondBlock from "../../components/SecondBlock";
import { ListRepositories } from "../../context";

const Repositories = () => {
    const [text, setText] = useState("");

    const { listRepos, setListRepos, infosOwner, setInfosOwner }: any =
        useContext(ListRepositories);

    console.log("repos", listRepos);
    console.log("infos", infosOwner);

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
                <FirstBlock listRepos={listRepos} />
            </Box>
            <Box
                position="fixed"
                p="50px 30px 0 40px"
                width="350px"
                h="100vh"
                bg="#fff"
                marginLeft="250px"
            >
                <SecondBlock infosOwner={infosOwner} />
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
                            <Image width="30px" height="30px" src={ImgLupa} />
                            <Image height="35px" src={ImgLupaPerson} />
                        </div>
                        <h1>Repositories</h1>
                        <DivInfosRepos>
                            <h2>
                                {`${listRepos.length} repositories has created so
                                far`}
                            </h2>
                            <ContainerInput>
                                <Image height="35px" src={ImgLupa} />
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
                            .map((item) => (
                                <a href={item.html_url} target="blanck">
                                    <CardRepo>
                                        <h1>{item.name}</h1>
                                        <span>{item.pushed_at}</span>
                                        <p>{item.description}</p>
                                        <div>
                                            <div>
                                                <Image src={ImgStarTwo} />
                                                <p>9.5k</p>
                                            </div>
                                            <div>
                                                <Image src={ImgShare} />
                                                <p>760</p>
                                            </div>
                                            <div>
                                                <Image src={ImgAuction} />
                                                <p>MIT</p>
                                            </div>
                                        </div>
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
    min-height: 250px;
    border: 1px solid #8f8e8e;
    color: #615c5c;
    padding: 15px;
    transition: all 0.3s ease;
    h1 {
        font-size: 16px;
        font-weight: 500;
        color: #242323;
    }
    span {
        font-size: 14px;
    }
    p {
        font-size: 16px;
        font-weight: 400;
        margin-top: 10px;
    }
    div {
        display: flex;
        justify-content: space-between;
        max-height: 25px;
        margin-top: 5px;
        p {
            margin: 0 !important;
            padding-left: 5px;
        }
    }
    :hover {
        h1 {
            font-size: 20px;
        }
        span {
            font-size: 16px;
        }
        p {
            font-size: 18px;
        }
    }
`;

const CardContainer = styled.div`
    width: 100%;
    height: 110%;
    box-shadow: -10px 0 10px -5px rgba(238, 235, 235, 0.75);
`;

const CardContainerTop = styled.div`
    height: 250px;
    width: 100%;
    padding: 20px 30px 3px 50px;
    box-shadow: 0 5px 5px -5px #333;
    h1 {
        color: #000;
        margin-top: 40px;
        font-size: 26px;
    }
    div {
        display: flex;
        justify-content: space-between;
    }
`;

const DivInfosRepos = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    h2 {
        color: #000;
        font-size: 22px;
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
    width: 200px !important;
    height: 25px;
`;

const CardContainerBottom = styled.div`
    width: 100%;
    max-height: 1600px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
    padding: 30px;
`;
