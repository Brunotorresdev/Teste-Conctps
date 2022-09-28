import styled from "styled-components";
import Image from "next/image";
import ImgPull from "../assets/images/pull.png";
import ImgInformation from "../assets/images/information.png";
import ImgMarket from "../assets/images/market.png";
import ImgEye from "../assets/images/olho.png";
import ImgStar from "../assets/images/star.png";
import ImgPastas from "../assets/images/pastas.png";
import ImgFollow from "../assets/images/followers.png";
import ImgGithubTwo from "../assets/images/github-two.png";

const FirstBlock = ({ listRepos }) => {
    return (
        <>
            <GroupButtons>
                <h2>MAIN</h2>
                <div>
                    <Image src={ImgPull} />
                    <p>Pull request</p>
                </div>
                <div>
                    <Image src={ImgInformation} />
                    <p>Issues</p>
                </div>
                <div>
                    <Image src={ImgMarket} />
                    <p>Market</p>
                </div>
                <div>
                    <Image src={ImgFollow} />
                    <p>Explore</p>
                </div>
            </GroupButtons>
            <GroupButtons>
                <h2>OTHER</h2>
                <div>
                    <Image src={ImgEye} />
                    <p>Overview</p>
                </div>
                <div>
                    <Image src={ImgPastas} />
                    <p>Repositories</p>
                    <span>{listRepos.length}</span>
                </div>
                <div>
                    <Image src={ImgStar} />
                    <p>Stars</p>
                </div>
                <div>
                    <Image src={ImgPull} />
                    <p>Followers</p>
                </div>
            </GroupButtons>
            <ImgGithubContainer>
                <ImgGithubLeft src={ImgGithubTwo} />
                <h1>GitHub</h1>
            </ImgGithubContainer>
        </>
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
        flex-direction: row !important;
        cursor: pointer;
        :hover {
            background-color: #0a30a1;
        }
        img {
            width: 15px;
            height: 15px !important;
        }
        p {
            margin-left: 5px;
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
    h1 {
        color: #ffffff;
        font-weight: bold;
        font-size: 24px;
    }
`;
const ImgGithubLeft = styled(Image)`
    border: 1px solid red;
    width: 70px;
`;

export default FirstBlock;
