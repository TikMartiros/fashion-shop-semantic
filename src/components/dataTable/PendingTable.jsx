// import { nanoid } from "nanoid";
// import { useEffect, useState } from "react";
// import { Pagination } from "semantic-ui-react";

// import { Grid, Segment, List, Image, Dropdown, Item } from "semantic-ui-react";
// import productImg from "../../img/img1.jpg";
// import "./dataTable.css";
// function PendingTable({ list, changeStatus, tabName }) {
//   // const [result, setResult] = useState(list);

//   // useEffect(() => {
//   //   if (list && list.length > 0) setResult(list);
//   // }, [list]);

//   console.log("list", list);
//   return (
//     <>
//       {list &&
//         list.length > 0 &&
//         list.map((item) => {
//           console.log("item", item);
//           return (
//             <Popup
//               inverted
//               content={Date(item.date)}
//               key={nanoid()}
//               header={item.user.name}
//               className="tooltip"
//               trigger={
//                 <Grid className="grid-table" >
//                   <Grid.Row>
//                     <Grid.Column width="3">
//                       <Segment.Inline className="orderId">
//                         {`Order  ${item.id}`}
//                       </Segment.Inline>
//                     </Grid.Column>
//                     <Grid.Column width="3">
//                       <Segment.Inline>
//                         <Image
//                           avatar
//                           className="product-icon"
//                           src={item.product.img[0]?.imagePath || logo}
//                         />
//                       </Segment.Inline>
//                     </Grid.Column>
//                     <Grid.Column width="4">
//                       <Segment.Inline>
//                         <List.Content>
//                           <List.Header>{item.product.name} </List.Header>
//                           {item.product.price} {item.address} {item.phone}
//                         </List.Content>
//                       </Segment.Inline>
//                     </Grid.Column>
//                     <Grid.Column width="3">
//                       <Segment.Inline>{item.orderStatus}</Segment.Inline>
//                     </Grid.Column>
//                     <Grid.Column width="3">
//                       <Segment.Inline>
//                         {tabName === "DONE" ? (
//                           <Dropdown
//                             pointing="top left"
//                             text="Edit"
//                             className="disabled"
//                           >
//                             <Dropdown.Menu className="doneTab ">
//                               <Dropdown.Item
//                                 onClick={() => {
//                                   changeStatus("PENDING", item.id);
//                                 }}
//                                 text="Pending"
//                                 icon="plus"
//                               />
//                               <Dropdown.Item
//                                 onClick={() => {
//                                   changeStatus("SENT", item.id);
//                                 }}
//                                 text="Sent"
//                                 icon="calendar"
//                               />
//                               <Dropdown.Item
//                                 onClick={() => {
//                                   changeStatus("PAID", item.id);
//                                 }}
//                                 text="Paid"
//                                 icon="calendar"
//                               />
//                               <Dropdown.Item
//                                 onClick={() => {
//                                   changeStatus("DONE", item.id);
//                                 }}
//                                 text="Done"
//                                 icon="calendar"
//                               />
//                             </Dropdown.Menu>
//                           </Dropdown>
//                         ) : (
//                           <Dropdown pointing="top left" text="Edit">
//                             <Dropdown.Menu className="doneTab ">
//                               <Dropdown.Item
//                                 onClick={() => {
//                                   changeStatus("PENDING", item.id);
//                                 }}
//                                 text="Pending"
//                                 icon="plus"
//                               />
//                               <Dropdown.Item
//                                 onClick={() => {
//                                   changeStatus("SENT", item.id);
//                                 }}
//                                 text="Sent"
//                                 icon="calendar"
//                               />
//                               <Dropdown.Item
//                                 onClick={() => {
//                                   changeStatus("PAID", item.id);
//                                 }}
//                                 text="Paid"
//                                 icon="calendar"
//                               />
//                               <Dropdown.Item
//                                 onClick={() => {
//                                   changeStatus("DONE", item.id);
//                                 }}
//                                 text="Done"
//                                 icon="calendar"
//                               />
//                             </Dropdown.Menu>
//                           </Dropdown>
//                         )}
//                       </Segment.Inline>
//                     </Grid.Column>
//                   </Grid.Row>
//                 </Grid>
//               }
//             />
//           );
//         })}
//     </>
//   );
// }
// export default PendingTable;



import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { Pagination } from "semantic-ui-react";

import { Grid, Segment, List, Image, Dropdown, Item } from "semantic-ui-react";
import productImg from "../../img/img1.jpg";
import "./dataTable.css";

function PendingTable({ list, changeStatus }) {
  const [productsByPage, setProductsByPage] = useState([]);
  const [start, setStart] = useState(0);
  const [result, setResult] = useState([]);
  const pageDevider = 4;

  useEffect(() => {
    setProductsByPage(list.slice(start, start + pageDevider));
  }, [start, result]);

  useEffect(() => {
    if (list && list.length > 0) setResult(list);
  }, [list]);

  function goToPage(e, data) {
    console.log(data.activePage);
    setStart(data.activePage * pageDevider - pageDevider);
  }

  return (
    <>
      {productsByPage &&
        productsByPage.length > 0 &&
        productsByPage.map((item) => {
          console.log("item", item);
          return (
          
            <Item.Group key={nanoid()}>
              <Item>
                <Item.Image
                  size="tiny"
                  src={item.product.img[0]?.imagePath || productImg}
                />
                <Item.Content>{item.orderStatus}</Item.Content>
                <Item.Content>
                  <Item.Header as="a"> {item.product.name}</Item.Header>
                  <Item.Extra>{item.product.description.comment} </Item.Extra>
                </Item.Content>
                <Item.Content>
                  <Item.Header as="a">
                    <Dropdown pointing="top left" text="Edit Status">
                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() => {
                            changeStatus("PENDING", item.id);
                          }}
                          text="Pending"
                          icon="plus"
                        />
                        <Dropdown.Item
                          onClick={() => {
                            changeStatus("SENT", item.id);
                          }}
                          text="Sent"
                          icon="calendar"
                        />
                        <Dropdown.Item
                          onClick={() => {
                            changeStatus("PAID", item.id);
                          }}
                          text="Paid"
                          icon="calendar"
                        />
                        <Dropdown.Item
                          onClick={() => {
                            changeStatus("DONE", item.id);
                          }}
                          text="Done"
                          icon="calendar"
                        />
                      </Dropdown.Menu>
                    </Dropdown>{" "}
                  </Item.Header>
                  <Item.Meta></Item.Meta>
                  <Item.Description>Address {item.address}</Item.Description>
                  <Item.Extra>Phone {item.phone}</Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          );
        })}
      <div className="pagination-container">
        <Pagination
          defaultActivePage={1}
          secondary
          onPageChange={goToPage}
          totalPages={Math.ceil(result.length / pageDevider)}
        />
      </div>
    </>
  );
}

export default PendingTable;