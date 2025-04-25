import './ArticleTriarApat.css'
import { useForm } from 'react-hook-form'

export const ArticleTriarApat = ({ nomArticle, llista })  => {


    const { register, formState: {errors} } = useForm()

    const className_article = 'cn-article-triar-apat';
    const className_div_nom = 'cn-div-nom-triar-apat';
    const className_h3_nom = 'cn-h3-nom-triar-apat';
    const className_div_nom_apat = 'cn-div-nom-apat-triar-apat';

    const className_radio_input = 'cn-radio-input-triar-apat';
    //const className_radio_input_style = 'cn-radio-input-style-triar-apat';

    const name_radio_input = `nameApat${nomArticle}`;
    //const className_span = 'cn-span-error-triar-apat';

    return (
        <article className={className_article}>
            <div className={className_div_nom}>
                <h3 className={className_h3_nom}>{nomArticle}</h3>
            </div>
            {llista.map((item) => (
                <div key={item.id} className={className_div_nom_apat}>
                    <label htmlFor={`id_${item.id}_triar_apat`}>{item.nom}</label>
                    <input
                        type='radio'
                        className={className_radio_input}
                        id={`id_${item.id}_triar_apat`}
                        value={item.id}
                        name={name_radio_input}
                        { ... register(`apats${nomArticle}`)}
                    />
                </div>
            ))}
        </article>
    )
}