exports.dashboard = async(req,res) =>{
    const locals ={
        title:"Dashboard",
        description:"free Note taking App"
    }
    res.render('dashboard/index',{
        locals,
        layout:'../views/layouts/dashboard'
    });
}