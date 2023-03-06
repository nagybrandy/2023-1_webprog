/*
-kinyerjük a táblázatunkból az adatokat
[
  [Alma, Békés],
  [Körte, HD],
  [Szilva, Vas]
]
-ha kattintunk, sortolja az adott oszlop alapján az adatokat
-megjelenítjuk
*/

function sortedTable(){
  const tbody = document.querySelector("tbody")

  const data = [...tbody.querySelectorAll("tr")]
  .map(row=> [...row.querySelectorAll('td')]
  .map(cell => cell.innerText))

  data.sort((a, b) => a[0] > b[0] ? 1 : -1)

  console.log(data)

  tbody.innerHTML = data.map(row => `
  <tr>
  ${row.map(d => 
    `<td>
      ${d}
    </td>`
  ).join('')}
  </tr>
  `).join('')
}

document.querySelector('thead').addEventListener('click', sortedTable)