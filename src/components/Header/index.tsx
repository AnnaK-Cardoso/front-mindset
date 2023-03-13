import Button from 'components/Button';
import { useState } from 'react';
import * as S from './styles';

export type headerComponentProps = {
    logo: string;
    searchSelected?: boolean;
    logado?: boolean;
};
const Header: React.FC<headerComponentProps> = ({
    logo,
    searchSelected,
    logado
}) => {
    const [isHomeSelected, setIsHomeSelected] = useState(true);
    const [isFAQSelected, setIsFAQSelected] = useState(false);
    const [isWorkSelected, setIsWorkSelected] = useState(false);
    const onClickHome = () => {
        setIsFAQSelected(false);
        setIsWorkSelected(false);
        setIsHomeSelected(true);
    };
    const onClickFAQ = () => {
        setIsFAQSelected(true);
        setIsWorkSelected(false);
        setIsHomeSelected(false);
    };
    const onClickWork = () => {
        setIsFAQSelected(false);
        setIsWorkSelected(true);
        setIsHomeSelected(false);
    };

    return (
        <S.Container>
            <S.Logo src={logo} />
            {logado ? (
                <>
                    <S.Container1>
                        <Button
                            onclick={onClickHome}
                            selected={isHomeSelected}
                            type2={false}
                            Text="Home"
                        />
                        <Button
                            onclick={onClickFAQ}
                            selected={isFAQSelected}
                            type2={false}
                            Text="FAQ"
                        />
                        <Button
                            onclick={onClickWork}
                            selected={isWorkSelected}
                            type2={false}
                            Text="Trabalhe Conosco"
                        />
                    </S.Container1>
                    {searchSelected ? (
                        <>
                            <S.SearchLogged placeholder="Buscar..." />
                            <S.Perfil src="/assets/perfil.svg" />
                        </>
                    ) : (
                        <>
                            <S.LoginContainer2>
                                <S.SearchImg2 src="/assets/search.svg" />
                                <S.Perfil src="/assets/perfil.svg" />
                            </S.LoginContainer2>
                        </>
                    )}
                </>
            ) : (
                <>
                    <S.SearchContainer>
                        <S.Search placeholder="Buscar..." />
                    </S.SearchContainer>
                    <S.LoginContainer>
                        <S.LoginContainer2>
                            <S.LoginImage src="assets/PersonYellow.png" />
                            <Button
                                selected={false}
                                type2={false}
                                Text="ENTRAR"
                            />
                        </S.LoginContainer2>
                        <Button selected={false} type2 Text="CRIAR CONTA" />
                    </S.LoginContainer>
                </>
            )}
        </S.Container>
    );
};
export default Header;
