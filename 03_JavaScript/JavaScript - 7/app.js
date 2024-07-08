const student = {
    name:"narayan",
    age: 22,
    eng: 95,
    maths: 93,
    phy: 97,
    getAvg: function()
    {
        console.log(this);
        let avg=(this.eng + this.maths + this.phy)/3;
        console.log(`${this.name} has got average marks = ${avg}`);
    }
};

function win_obj()
{
    console.log(this);
};
