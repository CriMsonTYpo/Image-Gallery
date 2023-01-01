let i1=document.querySelector("#imgone");
let i2=document.querySelector("#imgtwo");
let i3=document.querySelector("#imgthree");
let i4=document.querySelector("#imgfour");
let i5=document.querySelector("#imgfive");
let i=document.querySelector("#img");
let k;
let a=document.querySelectorAll(".i");
let prev=document.querySelector("#prev");

function change(item)
{
    i.src=item.src;
}

i1.addEventListener('click', function()
{
    change(i1);
})

i2.addEventListener('click', function()
{
    change(i2);
})

i3.addEventListener('click', function()
{
    change(i3);
})

i4.addEventListener('click', function()
{
    change(i4);
})

i5.addEventListener('click', function()
{
    change(i5);
})
