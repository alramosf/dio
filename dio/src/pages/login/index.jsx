import { Link } from 'react-router-dom';

import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'
import { MdEmail, MdLock } from 'react-icons/md'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';


import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from './styles';
const Login = () => {

    const schema = yup.object({
        email: yup.string().email('email não é valido').required('Campo obrigatório'),
        password: yup.string().min(8, 'No minimo 3 caracteres').required('Campo obrigatório'),
      }).required();



    const navigate = useNavigate();
    
    
    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    console.log(isValid, errors)

    const onSubmit = data => console.log(data);


    //const handleClickSignIn = () => {
    //    navigate('/feed')
   // }



    return (<>
        <Header />
        <Container>
            <Column>
                <Title> 
                   A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>

            </Column>
            <div>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change.</SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail/>}/>
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                        <Button title="Entrar" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </div>
        </Container>
    </>)
}

export { Login }