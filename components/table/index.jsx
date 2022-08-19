import styles from "./styles.module.css"

export function Table({ data, onRowClick }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {Object.keys(data[0])
            .filter((_, i) => i !== 0)
            .map((key, i) => (
              <th key={i + key} className={styles.th}>
                {key}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr
            key={i}
            onClick={() => onRowClick && onRowClick(row)}
            className={styles.tr}
          >
            {Object.values(row)
              .filter((_, i) => i !== 0)
              .map((value, j) => (
                <td key={j + value} className={styles.td}>
                  {value}
                </td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
