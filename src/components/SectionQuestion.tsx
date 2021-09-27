import React, {useState} from 'react';
import ScrollBtn from "./ScrollBtn";

const SectionQuestion = () => {

    const [prevElement, setPrevElement] = useState()

    const titleArr = ['Какие отличия между Mavic 2 Pro и Mavic 2 Zoom?', 'Чем Mavic 2 лучше Mavic Pro?',
        'Можно ли подключить Mavic 2 к очкам DJI Goggles?', 'Является ли Mavic 2 водонепроницаемым?']
    const textArr = ['В Mavic 2 улучшены практически все аспекты: камера, передача видеосигнала полётное время, скорость, уровень шума, обнаружение препятствий в нескольких направлениях, интеллектуальные функции и уникальная функция Hyperlapse (гиперлапс).',]

    const openText = (e: React.MouseEvent<HTMLDivElement>) => {
        if (prevElement) {
            // @ts-ignore
            prevElement[1].className = 'question_item-text'
            // @ts-ignore
            prevElement[0].className = 'question_item-title'
        }
        // @ts-ignore
        setPrevElement(e.currentTarget.children)

        const text: any = e.currentTarget.children.item(1)!
        const title = e.currentTarget.children.item(0)!

        text.className = 'question_item-text-open'
        title.className = 'question_item-title-open'

    }

    return (
        <section className="page-section question" id='question'>
            <div className="page-section_wrapper top_wrapper">
                <div className="container">
                    <h3 className="title">Остались вопросы?</h3>
                    <div className="question_items">
                        {titleArr.map((title, id) => {
                            return (
                                <div className="question_item" key={id}
                                     onClick={(e: React.MouseEvent<HTMLDivElement>) => openText(e)}>
                                    <h4 className="question_item-title">{title}</h4>
                                    <p className='question_item-text'>{textArr[0]}</p>
                                    {/*{!id?<h4 className="question_item-title-open">{title}</h4>:<h4 className="question_item-title">{title}</h4>}*/}
                                    {/*{!id?<p className="question_item-text-open">{textArr[0]}</p>:<p className="question_item-text">{textArr[0]}</p>}*/}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <ScrollBtn nextLink={'contacts'}/>
            </div>
        </section>

    );
};

export default SectionQuestion;