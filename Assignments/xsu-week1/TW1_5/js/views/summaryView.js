function SummaryView(props){
  return (
    <div class="summary-container">
      Summary for <span title="nr. guests">{props.persons}</span> guests:
    </div>
  );
}
