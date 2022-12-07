import React from 'react'

import { FiThumbsUp } from 'react-icons/fi'
import {CardContainer,Content,HasInfo,ImageBackground,PostInfo,UserInfo,UserPicture} from './styles'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src="https://hermes.digitalinnovation.one/articles/cover/374a8bd9-c2e3-4e9a-89f0-20773779e6e6.png"/>
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/106263609?v=4"/>
                <div>
                    <h4>Alexandre Ramos</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito o curso de html e css no bootcamp dio do Global avanade... <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS $JavaScript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>


    </CardContainer>
  )
}

export { Card }