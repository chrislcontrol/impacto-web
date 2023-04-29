import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { CSSProperties, useState } from "react";
import ColorTheme from '../ColorTheme';
import FontSize from '../FontSize';

interface CarouselProps {
  slides: string[]
}

export default function Carousel(props: CarouselProps) {
  const firstSlide = { index: 0, img: props.slides[0] }
  const [slide, setSlide] = useState(firstSlide)
  const [leftButtonMouseHoverStyle, setLeftButtonMouseHoverStyle] = useState({})
  const [rightButtonMouseHoverStyle, setRightButtonMouseHoverStyle] = useState({})

  const buttonStyle: CSSProperties = {
    cursor: 'pointer',
    color: ColorTheme.primary,
    fontSize: 60
  }
  const buttonMouseHoverHighlight: CSSProperties = {
    filter: 'brightness(200%)'
  }

  function previousSlide() {
    if (slide.index == 0) return setSlide({ index: props.slides.length - 1, img: props.slides.slice(-1)[0] })

    const newIndex = slide.index - 1
    setSlide({ index: newIndex, img: props.slides[newIndex] })
  }

  function nextSlide() {
    if (slide.index == props.slides.length - 1) return setSlide(firstSlide)

    const newIndex = slide.index + 1
    setSlide({ index: newIndex, img: props.slides[newIndex] })
  }

  return (
    <div className='container' style={{
      display: 'flex',
      flexDirection: 'column',
      color: ColorTheme.text, 
      justifyContent: 'space-between',
      gap: '1rem',
      height: '45rem'
    }}>
      <div className='carousel' style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '95rem',
        height: '40rem',
        padding: '0 4rem'
      }}>
        <ArrowCircleLeftRoundedIcon
          onClick={previousSlide}
          style={{ ...buttonStyle, ...leftButtonMouseHoverStyle }}
          onMouseEnter={() => setLeftButtonMouseHoverStyle(buttonMouseHoverHighlight)}
          onMouseLeave={() => setLeftButtonMouseHoverStyle({})}
        />
        <img className='carousel-image' src={slide.img} alt={'Slide ' + slide.img} style={{
          width: '80%',
          height: '100%',
          borderRadius: '10px',
          border: 'solid ' + ColorTheme.primary
        }} />
        <ArrowCircleRightRoundedIcon
          onClick={nextSlide}
          style={{ ...buttonStyle, ...rightButtonMouseHoverStyle }}
          onMouseEnter={() => setRightButtonMouseHoverStyle(buttonMouseHoverHighlight)}
          onMouseLeave={() => setRightButtonMouseHoverStyle({})} />
      </div>
      <div className='counter' style={{
        color: 'white', 
        textAlign: 'center',
        width: '95rem',
        height: '40rem',
        padding: '0 4rem', 
        fontSize: FontSize.super, 
        fontWeight: 'bold'
      }}>
        {slide.index + 1} / {props.slides.length}
        </div>
    </div>
  )
}