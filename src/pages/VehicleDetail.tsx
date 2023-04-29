import CheckIcon from '@mui/icons-material/Check';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { CSSProperties } from "react";
import { useNavigate } from 'react-router-dom';
import ColorTheme from "../ColorTheme";
import FontSize from "../FontSize";
import Footer from '../components/Footer';
import { Header } from '../components/Header';

export default () => {
    const navigate = useNavigate()

    const secondaryimgSize = {
        height: '300px',
        width: '450px',
        border: 'solid ' + ColorTheme.item
    }
    const secondaryGridStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '25%',
        alignItems: 'center'

    }

    return (
        <div>
            <Header />

            <div
                className='container'
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    color: ColorTheme.text,
                    fontSize: FontSize.title,
                    background: ColorTheme.item
                }}>

                <div style={{
                    border: 'solid ' + ColorTheme.primary,
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <img className='extend-fluid-md' src='/src/assets/img/carro2.jpeg' style={{
                        height: '607px',
                        width: '960px',
                        maxHeight: '100%',
                        maxWidth: '50%',
                    }} />

                    <div style={secondaryGridStyle}>
                        <img src='/src/assets/img/carro2.jpeg' style={secondaryimgSize} />
                        <img src='/src/assets/img/carro.jpeg' style={secondaryimgSize} />

                    </div>

                    <div style={secondaryGridStyle}>
                        <img src='/src/assets/img/carro.jpeg' style={secondaryimgSize} />
                        <img src='/src/assets/img/carro2.jpeg' style={{
                            ...secondaryimgSize,
                            filter: 'brightness(25%)',
                            cursor: 'pointer'
                        }} />
                        <div className='text-over-img'
                            onClick={() => navigate('/detalhes/imagens')}
                            style={{
                                position: 'absolute',
                                bottom: '150px',
                                fontSize: FontSize.grand,
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            }}>
                            Ver todas as fotos
                        </div>

                    </div>

                </div>
                <div className='other-elements'>

                    <div className='boxes' style={{
                        color: ColorTheme.primary,
                        display: 'flex',
                        justifyContent: 'space-around',
                        fontSize: FontSize.super,
                        padding: '1rem 0',
                        border: 'solid ' + ColorTheme.primary,
                        borderWidth: 'thin',
                        borderSpacing: '10rem',
                        fontWeight: 'bold',
                        alignItems: 'center',
                        background: ColorTheme.item
                    }}>
                        <div className="left-box">
                            <SwapHorizIcon /> Aceita troca
                        </div>
                        <div className="right-box">
                            <RequestQuoteIcon /> Financia
                        </div>
                    </div>

                    <div className='vehicle-info'
                        style={{
                            color: ColorTheme.text,
                            display: 'flex',
                            textAlign: 'left',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            gap: '3rem',
                            padding: '2rem 10rem',
                            fontSize: FontSize.super,
                            background: ColorTheme.item,
                        }}>

                        <div className='vehicle-model-and-description' style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            marginRight: '5rem',
                            gap: '0.5rem'
                        }}>
                            <div className='model-and-brand' style={{ fontWeight: 'bold' }}>
                                VolksWagen T-Cross
                            </div>
                            <div className='description'>
                                1.4 TSI Highline AT Flex
                            </div>
                        </div>

                        <div className='old-value'>
                            de <strong style={{ color: ColorTheme.badText, textDecoration: 'line-through' }}>R$ 124.990</strong>
                        </div>
                        <div className='new-value'>por <strong style={{ color: ColorTheme.goodText }}>R$ 119.990</strong></div>

                    </div>

                    <div className='description-box' style={{
                        padding: '2rem 10rem 4rem 10rem',
                        borderTop: 'solid ' + ColorTheme.primary,
                        borderBottom: 'solid ' + ColorTheme.primary,
                        borderWidth: 'thin',
                        justifyContent: 'center',
                        alignItems: 'center'

                    }}>
                        <p className='description-box-title' style={{ display: 'flex', fontSize: FontSize.grand }}>
                            DESCRIÇÃO
                        </p>
                        <div className='description-box-text' style={{ display: 'flex', width: '70%', }}>
                            Aqui esta uma longa
                            Aqui esta uma longa descricao
                            Aqui esta uma longa descricao
                            Aqui esta uma longa descricao
                            Aqui esta uma longa descricao
                            Aqui esta uma longa descricao
                            Aqui esta uma longa descricao
                            Aqui esta uma longa descricao
                            Aqui esta uma longa descricao
                            Aqui esta uma longa descricao
                            Aqui esta uma longa descricao
                            Aqui esta uma longa descricao
                        </div>

                    </div>

                    <div className='data-sheet'
                        style={{
                            padding: '2rem 10rem',
                            borderTop: 'solid ' + ColorTheme.primary,
                            borderBottom: 'solid ' + ColorTheme.primary,
                            borderWidth: 'thin'

                        }}>
                        <p style={{ fontSize: FontSize.grand }}>FICHA TÉCNICA</p>
                        <div className='data-sheet-itens' style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            gap: '30%',
                            width: '60%',
                            fontSize: FontSize.title
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><SettingsSuggestIcon /><p>Automatico</p></div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><SettingsSuggestIcon /><p>2020/2021</p></div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><SettingsSuggestIcon /><p>60.968 km</p></div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><SettingsSuggestIcon /><p>Cinza</p></div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><SettingsSuggestIcon /><p>Flex</p></div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><SettingsSuggestIcon /><p>Flex</p></div>

                        </div>

                    </div>

                    <div className='optionals'
                        style={{
                            padding: '2rem 10rem',
                            borderTop: 'solid ' + ColorTheme.primary,
                            borderBottom: 'solid ' + ColorTheme.primary,
                            borderWidth: 'thin'

                        }}>
                        <p className='opcionals-title' style={{ fontSize: FontSize.grand }}>OPCIONAIS</p>
                        <div className='data-sheet-itens' style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            gap: '10%',
                            width: '60%',
                            fontSize: FontSize.title
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><CheckIcon /><p>Banco de couro</p></div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><CheckIcon /><p>Rodas de liga leve</p></div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><CheckIcon /><p>Chave presença</p></div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><CheckIcon /><p>Limpador traseiro</p></div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><CheckIcon /><p>Start/Stop</p></div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><CheckIcon /><p>Vidros elétricos traseiros</p></div>
                        </div>

                    </div>
                </div>
            </div>
            
            <Footer />


        </div>


    )
}
