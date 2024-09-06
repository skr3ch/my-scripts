function c_inutili() { 
  var delayDays = "5" // Enter # of days before messages are moved to trash
  var maxDate = new Date(); 
  maxDate.setDate(maxDate.getDate()-delayDays); 
  var label = GmailApp.getUserLabelByName("Yahoo eliminare");  // Enter label
  var threads = label.getThreads(); 
  if (threads.length > 0)
  for (var i = 0; i < threads.length; i++) { 
    if (threads[i].getLastMessageDate()<maxDate)
    { 
      threads[i].moveToTrash();
    } 
  }
}
