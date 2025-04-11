import "./styles.css";
import { useRef } from "react";
import { Button } from "antd";
import { useReactToPrint } from "react-to-print";

export default function App() {
  const exportRef = useRef<HTMLDivElement>(null);
  const handleExportPDF = useReactToPrint({
    contentRef: exportRef,
  });

  const exportPDF = () => {
    handleExportPDF();
  };

  return (
    <>
      <div className="App" ref={exportRef}>
        <div>
          {/* 工程师表格 */}
          <table
            className="custom-table"
            style={{
              borderCollapse: "collapse",
              borderSpacing: 0,
              width: "100%",
              color: "black",
              fontSize: 14,
            }}
          >
            <thead style={{ marginTop: 10 }}>
              <tr style={{ border: "1px solid rgb(204, 204, 204)" }}>
                <th
                  style={{
                    padding: 10,
                    border: "1px solid rgb(204, 204, 204)",
                  }}
                >
                  Engineer Role
                </th>
                <th
                  style={{
                    padding: 10,
                    border: "1px solid rgb(204, 204, 204)",
                  }}
                >
                  Name
                </th>
                <th
                  style={{
                    padding: 10,
                    border: "1px solid rgb(204, 204, 204)",
                  }}
                >
                  Rate ($/Hours)
                </th>
                <th
                  style={{
                    padding: 10,
                    border: "1px solid rgb(204, 204, 204)",
                  }}
                >
                  Start Date
                </th>
                <th
                  style={{
                    padding: 10,
                    border: "1px solid rgb(204, 204, 204)",
                  }}
                >
                  End Date
                </th>
              </tr>
            </thead>
            <thead style={{ marginTop: 10 }}>
              <tr style={{ border: "1px solid rgb(204, 204, 204)" }}>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid rgb(204, 204, 204)",
                  }}
                >
                  Full Stack Developer
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid rgb(204, 204, 204)",
                  }}
                >
                  由佳霖
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid rgb(204, 204, 204)",
                  }}
                >
                  20
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid rgb(204, 204, 204)",
                  }}
                >
                  2025/03/28
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid rgb(204, 204, 204)",
                  }}
                >
                  2025/03/29
                </td>
              </tr>
              <tr style={{ border: "1px solid rgb(204, 204, 204)" }}>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid rgb(204, 204, 204)",
                  }}
                >
                  Senior Backend Developers
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid rgb(204, 204, 204)",
                  }}
                >
                  由本澄
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid rgb(204, 204, 204)",
                  }}
                >
                  15
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid rgb(204, 204, 204)",
                  }}
                >
                  2025/03/30
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid rgb(204, 204, 204)",
                  }}
                >
                  2025/03/31
                </td>
              </tr>
            </thead>
          </table>

          <br />
          {/* 功能模块表格 */}
          <table
            className="custom-table"
            style={{
              borderCollapse: "collapse",
              width: "100%",
              color: "black",
              fontSize: 14,
            }}
          >
            <tbody>
              {/* 表头 */}
              <tr style={{ border: "1px solid #ccc" }}>
                <th style={{ padding: 10, border: "1px solid #ccc" }}>No</th>
                <th style={{ padding: 10, border: "1px solid #ccc" }}>
                  Module
                </th>
                <th style={{ padding: 10, border: "1px solid #ccc" }}>
                  Functionality
                </th>
                <th style={{ padding: 10, border: "1px solid #ccc" }}>
                  Estimated Hours
                </th>
                <th style={{ padding: 10, border: "1px solid #ccc" }}>
                  Engineer
                </th>
                <th style={{ padding: 10, border: "1px solid #ccc" }}>Hours</th>
                <th style={{ padding: 10, border: "1px solid #ccc" }}>
                  Cost $
                </th>
                <th style={{ padding: 10, border: "1px solid #ccc" }}>Note</th>
              </tr>

              {/* 登录模块 */}
              {/* 第一组行 */}
              <tr style={{ border: "1px solid #ccc" }}>
                <td
                  rowSpan={4}
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  1
                </td>
                <td
                  rowSpan={4}
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  Login
                </td>
                <td
                  rowSpan={2}
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  Restaurant login:
                  <br />
                  Enter the store allocation site Id, administrator e-mail and
                  password, APP login to the designated restaurant employee
                  login screen.
                </td>
                <td
                  rowSpan={2}
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  28
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  由佳霖
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  14
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  280
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                ></td>
              </tr>

              <tr style={{ border: "1px solid #ccc" }}>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  由本澄
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  14
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  210
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                ></td>
              </tr>

              {/* 第二组行 */}
              <tr style={{ border: "1px solid #ccc" }}>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  Employee Login:
                  <br />
                  Employee login interface, according the 4-digit employee
                  number.
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  8
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  由佳霖
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  8
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  160
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                ></td>
              </tr>

              <tr style={{ border: "1px solid #ccc" }}>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  Configuration:
                  <br />
                  Set the specified restaurant configuration, switch to the
                  specified other restaurant. Configure the store's internal
                  network connection to include printers, cash registers, POS
                  registers, and more.
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  24
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  由佳霖
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  24
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  480
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  No any functionalities will be implemented, only UI is
                  designed to show how it looks like, because no any printers or
                  other hardwares can be connected.
                </td>
              </tr>

              {/* 员工管理模块 */}
              <tr style={{ border: "1px solid #ccc" }}>
                <td
                  rowSpan={2}
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  2
                </td>
                <td
                  rowSpan={2}
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  Staff Management
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  Employees clock in:
                  <br />
                  Employee clock in, through the background management can be
                  set whether to turn on the employee function.
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  8
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  由本澄
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  8
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  120
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                ></td>
              </tr>

              <tr style={{ border: "1px solid #ccc" }}>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  Employees clock out:
                  <br />
                  Employee clock out, checks out at the end of the day, and the
                  IPAD goes back to the login screen.
                  <br />
                  {[...Array(15)].map((_, i) => (
                    <span key={i}>
                      a<br />
                    </span>
                  ))}
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  8
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  由本澄
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  8
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  120
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                ></td>
              </tr>

              {/* 表格模块 */}
              <tr style={{ border: "1px solid #ccc" }}>
                <td
                  rowSpan={3}
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  3
                </td>
                <td
                  rowSpan={3}
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  Table
                </td>
                <td
                  rowSpan={2}
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  Table module:
                  <br />
                  1.Table area, table list.
                  <br />
                  2.Manage tables's status and orders.
                  <br />
                  {[...Array(13)].map((_, i) => (
                    <span key={i}>
                      A<br />
                    </span>
                  ))}
                </td>
                <td
                  rowSpan={2}
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  24
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  由本澄
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  12
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  180
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                ></td>
              </tr>

              <tr style={{ border: "1px solid #ccc" }}>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  由佳霖
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  12
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  240
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                ></td>
              </tr>

              <tr style={{ border: "1px solid #ccc" }}>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  Order module:
                  <br />
                  1.Display table number, modified the number of dishes category
                  list.
                  <br />
                  2.Menu category tab, sub-category tab, corresponding menu
                  list, menu notes options.
                  <br />
                  3.Pay, save orders, add discounts
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  24
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  由本澄
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  24
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  360
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                ></td>
              </tr>

              {/* 总计行 */}
              <tr style={{ border: "1px solid #ccc" }}>
                <td
                  colSpan={3}
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  Total
                </td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  124
                </td>
                <td
                  colSpan={2}
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                ></td>
                <td
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                >
                  2150
                </td>
                <td
                  colSpan={2}
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: 10,
                    border: "1px solid #ccc",
                  }}
                ></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <Button onClick={() => exportPDF()} className="no-print">
          Export
        </Button>
      </div>
    </>
  );
}
