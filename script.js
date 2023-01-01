let i1=document.querySelector("#imgone");
let i2=document.querySelector("#imgtwo");
let i3=document.querySelector("#imgthree");
let i4=document.querySelector("#imgfour");
let i5=document.querySelector("#imgfive");
let i=document.querySelector("#img");
let k;
let a=document.querySelectorAll(".i");
let prev=document.querySelector("#prev");
let next=document.querySelector("#next");
let img=[i1.src, i2.src, i3.src, i4.src,i5.src];
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

function next_()
{
   let s=img.findIndex(i.src);

   if(s==4)
   {
        i.src=img[0];
        return;
   }
        i.src=img[++s];
        return;


}

function prev_()
{
    let s=img.findIndex(i.src);

   if(s==0)
   {
        i.src=img[4];
        return;
   }
        i.src=img[--s];
        return;
}

next.addEventListener('click', next_())

prev.addEventListener('click', prev_())