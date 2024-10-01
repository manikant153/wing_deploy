exports.homePage = async(req,res) =>{
    const locals = {
        title:'Note App',
        description:'Free Note Taking App'
    }
    res.render('index',{
        locals
    });
}
exports.AboutPage = async(req,res) =>{
    res.render('about');
}