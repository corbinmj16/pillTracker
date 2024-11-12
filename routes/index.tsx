export default function Home() {
  const current = new Date();
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const medicines = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];

  function getNumberOfDaysInCurrentMonth(): Date[] {
    const year = current.getFullYear();
    const month = current.getMonth() + 1;
    const d = new Date(year, month, 0);
    const days = Array.from({ length: d.getDate() }, (v, i) => new Date(year, month, i + 1));

    return days;
  }

  return (
    <section>
      <h1>{weekdays[current.getDay()]}</h1>
      <h2>{months[current.getMonth()]} {current.getDate()}, {current.getFullYear()}</h2>

      {medicines.map(medicine => (
          <div>
            Medicine: {medicine}
          </div>
      ))}

    </section>
  );
}
