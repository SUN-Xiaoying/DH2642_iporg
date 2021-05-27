function SummaryView(props){
  return (
    <div class="summary-container">
        Summary for <span title="nr. guests">{props.model.numberOfGuests}</span> guests:
    </div>
  );
}
