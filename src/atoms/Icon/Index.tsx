
interface PropsTypes {
    src?: "string";
    alt?: "string";
    width?: number;
    height?: number;
}

export default function Icon(props: PropsTypes){
    return (
        <>
            <img src={props.src} alt={props.alt} width="16px" height="16px"/>
        </>
    )
}