function SummaryView(props){
    return(
        <div class="summary-container">
            Summary for <span>{props.persons}</span> guests:
        </div>
    );
}

//Local State
const SummaryModel={
    data(){
        return{number:3};
    },
    render(){
        return <SummaryView persons={this.number}/>;
    }
}

