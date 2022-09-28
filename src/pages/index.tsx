import { FormControl, FormLabel, Input, Button, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import ImgGithub from "../assets/images/github.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import React from "react";

interface IFormInputs {
    email: string;
    password: string;
}

const schema = yup
    .object({
        email: yup.string().required("Email Obrigatório"),
        password: yup
            .string()
            .required("Senha Obrigatória")
            .min(8, "sua senha deve conter pelo menos 8 caracteres"),
    })
    .required();

export default function Home(): JSX.Element {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInputs>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: IFormInputs) => console.log(data);

    const router = useRouter();

    return (
        <Flex color="white" backgroundColor="#fff" height="100vh">
            <ImgGithubContainer>
                <Image src={ImgGithub} alt="Picture of the author" />
                <p>não tem conta ou esqueceu a senha?</p>
                <a href="/createAccount">Crie aqui sua conta</a>
            </ImgGithubContainer>
            <FormControl
                onSubmit={handleSubmit(onSubmit)}
                width="50%"
                margin="auto"
            >
                <Title>Entre com sua conta</Title>
                <FormLabel color="#3767fd">Email</FormLabel>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        color="#000"
                        type="email"
                        placeholder="Digite seu E-mail"
                        name="email"
                        {...register("email")}
                    />
                    <ErrorMessage color="#f00">
                        {errors.email?.message}
                    </ErrorMessage>

                    <FormLabel mt="30px" color="#3767fd">
                        Senha
                    </FormLabel>
                    <Input
                        color="#000"
                        type="password"
                        placeholder="Digite sua senha"
                        name="password"
                        {...register("password")}
                    />
                    <ErrorMessage color="#f00">
                        {errors.password?.message}
                    </ErrorMessage>

                    <Button
                        disabled={
                            errors.email?.message || errors.password?.message
                                ? true
                                : false
                        }
                        type="submit"
                        mt="50px"
                        colorScheme="linkedin"
                        onClick={() => router.push("/repositories")}
                    >
                        Entrar
                    </Button>
                </form>
            </FormControl>
        </Flex>
    );
}

const Title = styled.h1`
    color: #3767fd;
    margin-bottom: 30px;
    font-size: 36px;
    font-weight: 600;
`;

const ImgGithubContainer = styled.div`
    max-width: 300px;
    max-height: 140px;
    position: absolute !important;
    right: 200px;
    top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p,
    a {
        color: #3767fd;
    }
    a {
        font-weight: bold;
    }
`;

const ErrorMessage = styled.p`
    margin-top: 5px;
    color: #f00;
`;
