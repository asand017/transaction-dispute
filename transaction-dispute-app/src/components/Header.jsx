export const Header = (props) => {
    return (
        <div className="header">
            <div className="banner"></div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {props.left_icon}
                <p>{props.title}</p>
                {props.right_icon}
            </div>
        </div>
    )
}