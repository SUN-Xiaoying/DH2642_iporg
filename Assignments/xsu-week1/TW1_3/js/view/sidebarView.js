function SidebarView(props){
    return(
        <div class="sidebar-container">
            <button class="btn" onClick={ e => props.setGuests(props.guests+1) } disabled={props.guests>5}>+</button>
            <span class="m-2">{props.guests}</span>
            <button class="btn" onClick={ e => props.setGuests(props.guests-1) } disabled={props.guests<1}>-</button>
        </div>
    );
}




