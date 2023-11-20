import UnopDropdown from "unop-react-dropdown";
import sorted from "../../images/sort.png";
import { useState } from "react";
import UseSearchProduct from "../../customHooks/product/UseSearchProduct";
import { useEffect } from "react";




const SearchCountResult = ({ title }) => {
  const [items , results , pagination , onPress , getProducts] = UseSearchProduct();
  const [sort, setSort] = useState("");
  const handler = () => {

  }


  const clickMe = (sortWord) => {
        if (sortWord === "السعر من الاقل للاعلي") 
    {
      // sort = "+price";
      setSort("+price")
    } else if (sortWord === "السعر من الاعلي للاقل") 
    {
      // sort = "-price";
      setSort("-price")
    }  else if (sortWord === "") 
    {
      // sort = "";
      setSort("")
    } else if (sortWord === "الاكثر مبيعا") 
    {
      // sort = "-sold";
      setSort("-sold")
    } else if (sortWord === "الاعلي تقييما") 
    {
      // sort = "-ratingsQuantity";
      setSort("-ratingsQuantity")
    }
  }

  useEffect(() => {
    // sortData();
    const  sortdataa =async () => {
    await  getProducts(`sort=${sort}&limit=8&keyword=${""}`);
  
    }
sortdataa();
  },[sort])



  return (
    <div className="d-flex justify-content-between pt-3 px-2">
    <div className="sub-tile">{title}</div>
    <div className="search-count-text d-flex ">
        <UnopDropdown
            onAppear={handler}
            onDisappearStart={handler}
            trigger={
                <p className="mx-1">
                    <img
                        width="20px"
                        height="20px"
                        className="ms-1"
                        src={sorted}
                        alt=""
                    />
                    ترتيب حسب
                </p>
            }
            delay={0}
            align="CENTER"
            hover>
            <div className="card-filter">
                <div className="border-bottom card-filter-item" onClick={() => clickMe("")}>بدون ترتيب</div>
                <div className="border-bottom card-filter-item" onClick={() => clickMe("الاكثر مبيعا")}>الاكثر مبيعا</div>
                <div className="border-bottom card-filter-item" onClick={() => clickMe("الاعلي تقييما") }>الاعلي تقييما</div>
                <div className="border-bottom card-filter-item" onClick={() => clickMe("السعر من الاقل للاعلي") }>السعر من الاقل للاعلي</div>
                <div className=" card-filter-item"              onClick={() =>  clickMe("السعر من الاعلي للاقل")}>السعر من الاعلي للاقل</div>
           </div>
        </UnopDropdown>
    </div>
</div>
  )
}

export default SearchCountResult;