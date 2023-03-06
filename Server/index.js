const express = require('express');
const db = require('./config/db')
const cors = require('cors');
const app = express();
const  PORT = 3002;

app.use(cors());
app.use(express.json())
    
// Route to get all Ad's
app.get("/api/Catalog/", (req,res)=>{
    
    const page = parseInt(req.query.page);

    var SearchTerm = req.query.search;
    var Statment = "";
    var Statment1 = "SELECT `idAd`,`Name_US`, `Name_RU`, `Name_UZ`, `Email`, `Phone`, `Contact`,  `AdBody_US`, `AdBody_RU`, `AdBody_UZ`, `imgLink`, `AttachmentFileList`, SUBSTRING_INDEX(SUBSTRING_INDEX(`Country`, ',', 1), ',', -1)AS Country_US, SUBSTRING_INDEX(SUBSTRING_INDEX(`Country`, ',', 2), ',', -1) AS Country_RU, SUBSTRING_INDEX(SUBSTRING_INDEX(`Country`, ',', 3), ',', -1) AS Country_UZ FROM  Ad ";
    var Statment2 =  "SELECT COUNT(*) AS Total FROM Ad ";
    var limit = "LIMIT ? , 25";
  
    if(SearchTerm)
        {
            SearchTerm = '%'+req.query.search + '%';
            var where = " WHERE  REPLACE(`Ad_KeyWords` , ' ', '') LIKE REPLACE( ? , ' ', '' ) OR REPLACE(`Name_US` , ' ', '') LIKE REPLACE( ? , ' ', '' ) OR REPLACE(`Name_RU` , ' ', '') LIKE REPLACE( ? , ' ', '' ) OR REPLACE(`Name_UZ` , ' ', '') LIKE REPLACE( ? , ' ', '' ) OR REPLACE(`Email` , ' ', '') LIKE REPLACE( ? , ' ', '' ) OR REPLACE(`Phone` , ' ', '') LIKE REPLACE( ? , ' ', '' ) OR REPLACE(`Contact` , ' ', '') LIKE REPLACE( ? , ' ', '' ) OR REPLACE(`AdBody_US` , ' ', '') LIKE REPLACE( ? , ' ', '' ) OR REPLACE(`AdBody_RU` , ' ', '') LIKE REPLACE( ? , ' ', '' ) OR REPLACE(`AdBody_UZ` , ' ', '') LIKE REPLACE( ? , ' ', '' ) OR REPLACE(`Country`, ' ', '') LIKE REPLACE( ? , ' ', '' )";
            Statment =  Statment1 + where + limit + "; " + Statment2 + where + "; ";
            var filters = [SearchTerm, SearchTerm, SearchTerm, SearchTerm, SearchTerm, SearchTerm, SearchTerm, SearchTerm, SearchTerm, SearchTerm, SearchTerm, page, SearchTerm, SearchTerm, SearchTerm, SearchTerm, SearchTerm, SearchTerm, SearchTerm, SearchTerm, SearchTerm, SearchTerm, SearchTerm];  
        }
    else
        {
           Statment = Statment1 + limit + "; " + Statment2 + ";";
           var filters = [page]; 
        }
   
    //console.log("params: " + req.params.search);
    //console.log("params: " + db.format(Statment, filters));
   
 db.query(Statment, filters, function(err,result){
    if(err) {console.log(err)} 
    res.send(result)
    });   

});


// Route to Insert in to Log
app.get("/api/Log", (req,res)=>{
const Statment = "INSERT INTO `Log`(`VisitorIP`, `VisitorContry`, `VisotrsLangudge`, `VisitorAction`, `DT`, `AdId`) VALUES (?, ?, ?, ?, ?, ?)";
const FieldsList = [req.query.VisitorIP, 
                    req.query.VisitorContry, 
                    req.query.VisotrsLangudge, 
                    req.query.VisitorAction, 
                    req.query.DT,  
                    // ((req.query.Click) ? 1 : 0),
                    // ((req.query.Display) ? 1 : 0),
                    ((req.query.AdId) ? req.query.AdId : 0)
                    
                ];


//var FieldsValues = req.query.ip
console.log(req.query);

if(req.query.VisitorIP){
db.query(Statment, FieldsList, function(err,result){
    if(err) {console.log(err)} 
   // res.send(result)
    });   
}

});

// Route to Insert in to Massadge
app.get("/api/Msg", (req,res)=>{
    const Statment = "INSERT INTO `Msg`(`VisitorIP`, `VisitorContry`, `VisotrsLangudge`, `Massadge`, `DT`) VALUES (?, ?, ?, ?, ?)";
    const FieldsList = [req.query.VisitorIP, 
                        req.query.VisitorContry, 
                        req.query.VisotrsLangudge, 
                        req.query.Massadge, 
                        req.query.DT
                        
                    ];
    
    
    //var FieldsValues = req.query.ip
   // console.log(req.query);
    console.log("params: " + db.format(Statment, FieldsList));

    if(req.query.VisitorIP){
    db.query(Statment, FieldsList, function(err,result){
        if(err) {console.log(err)} 
        res.send(result)
        });   
    }
    
    });

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})
