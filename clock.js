export function updateDateTime() {
  const time = document.querySelector('.display-time');
  const currentDate = new Date();
  const customDateFormat = new Intl.DateTimeFormat('sv-SE', {
    timeStyle: 'short',
  });
  time.textContent = customDateFormat.format(currentDate);
  // console.log(customDateFormat.format(currentDate));
}

export function updateDateDate() {
  const time = document.querySelector('.display-date');
  const currentDate = new Date();
  const customDateFormat = new Intl.DateTimeFormat('sv-SE', {
    dateStyle: 'long',
  });
  time.textContent = customDateFormat.format(currentDate);
  // console.log(customDateFormat.format(currentDate));
}
