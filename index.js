const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = 2732
canvas.height = 1452

const bg = new Image()
bg.src = './back.png'
var dem =0
var rt = true
var mouse = {
    x:undefined,
    y:undefined
}
var start={
    x:undefined,
    y:undefined
}
window.addEventListener('touchstart',(e)=>
{
    
    var touch = e.touches[0]
    start.x = touch.clientX
    start.y = touch.clientY
    if(start.x > canvas.width/2)
    {
        keys.up = true
    }
})
window.addEventListener('touchmove',(e)=>
{
    var touch = e.touches[0]
    mouse.x = touch.clientX
    mouse.y = touch.clientY
    if(mouse.x<start.x&&mouse.x <canvas.width/2)
    {
        keys.left = true
        player1.image = player1.imagerl
    }
    else if(mouse.x>start.x&&mouse.x <canvas.width/2)
    {
        keys.right = true
        player1.image = player1.imagerr
    }
    if(keys.up&&player1.velocity.y ==0)
    {
        if(dem<=80

            ) 
        {
            dem = dem +4
        }   
    }
})
window.addEventListener('touchend',(e)=>
{
    start.x = 0
    start.y = 0
    mouse.x =0
    mouse.y=0
    if(keys.right==true)
    {
        player1.image = player1.imageidler
        keys.right = false
    }
    if(keys.left==true)
    {
        player1.image = player1.imageidlel
        keys.left = false
    }
    
    if(dem>4&&dem<80)
        {
            player1.velocity.y = -(dem/4)
            dem=0
        }
        else if(dem>=80)
        {
            player1.velocity.y = -20
            dem=0
            
        }
        dem=0
        if(player1.image == player1.imageidler||player1.imag==player1.imagerr)
        {
            player1.image = player1.imagejr
        }
        else if(player1.image == player1.imageidlel||player1.imag==player1.imagerl)
        {
            player1.image = player1.imagejl
        }
        //-----fall------------------------------------------------------------------------------
        if(player1.image==player1.imagejr)
        {
            player1.image = player1.imagefr
             
        }
        if(
           player1.image ==player1.imagejl
        )
        {player1.image = player1.imagefl
            }
        keys.up = false
})


function mapp()
{
    if(map==1)
    {
         wall1 = [new wall(0,canvas.height-40,841,76,'./nendat.jpg'),new wall(421,canvas.height-40,841,76,'./nendat.jpg')
        ,new wall(842,canvas.height-40,841,76,'./nendat.jpg'),new wall(1600,canvas.height-40,841,76,'./nendat.jpg'),
        new wall(2000,canvas.height-40,841,76,'./nendat.jpg'),

        new wall(0,1000,282,76,'./nen.jpg'), new wall(410,400,97,76,'./nennho.jpg'),new wall(1600,800,97,76,'./nennho.jpg'),
        new wall(2000,200,97,76,'./nennho.jpg'),new wall(1800,400,97,76,'./nennho.jpg'),
        //dong cuoi
        new wall(1000,300,97,76,'./nennho.jpg'),new wall(700,300,97,76,'./nennho.jpg'),
        new wall(0,350,97,76,'./nennho.jpg'),
        new wall(1800,800,97,76,'./nennho.jpg'),new wall(2200,550,97,76,'./nennho.jpg'),
        new wall(600,1000,282,76,'./nen.jpg'), new wall(1200,900,97,76,'./nennho.jpg'), 
        new wall(1300,300,97,76,'./nennho.jpg'),
         new wall(1600,350,76,282,'./nendocphai.jpg'),
        
       
        new wall(1100,1150,76,282,'./nendoctrai.jpg'),
         new wall(1176,1150,76,282,'./nendocphai.jpg')
    ] 
    }
    if(map==2)
    {
        //bot
         wall1 = [new wall(97,canvas.height-40,97,76,'./nennho.jpg'),
         //mid2
         ,new wall(300,800,97,76,'./nennho.jpg'),new wall(100,510,97,76,'./nennho.jpg'),
         new wall(1100,600,282,76,'./nen.jpg'), 
         new wall(1100,250,841,76,'./nendat.jpg'),new wall(2000,300,97,76,'./nennho.jpg'),
        
         new wall(200,200,97,76,'./nennho.jpg'),new wall(800,1300,97,76,'./nennho.jpg'),
         //mid1
         new wall(1200,1100,282,76,'./nen.jpg'),
         new wall(canvas.width-97,900,97,76,'./nennho.jpg'),new wall(1700,900,97,76,'./nennho.jpg'),
         new wall(2200,900,97,76,'./nennho.jpg'),new wall(500,1300,97,76,'./nennho.jpg')
         
         //doc2
         , new wall(900,350,76,282,'./nendocphai.jpg'),
         new wall(900,600,76,282,'./nendocphai.jpg'),
         
        //doc1
        new wall(600,350,76,282,'./nendocphai.jpg'),
         new wall(600,600,76,282,'./nendocphai.jpg'),
         //top
        
         
        ]
       
    }
    if(map==3)
    {
        //mid1
        wall1 = [new wall(2400,1000,97,76,'./nennho.jpg')
        ,new wall(100,900,97,76,'./nennho.jpg'),new wall(600,900,97,76,'./nennho.jpg')
        ,new wall(1100,900,97,76,'./nennho.jpg'),new wall(0,500,97,76,'./nennho.jpg')//dichuyen
        ,new wall(1600,900,97,76,'./nennho.jpg'),

    //mid2
        new wall(2100,1300,97,76,'./nennho.jpg')
        ,new wall(400,1400,97,76,'./nennho.jpg'),new wall(800,1300,97,76,'./nennho.jpg')
        ,new wall(1100,1300,97,76,'./nennho.jpg'),new wall(1800,1300,97,76,'./nennho.jpg')
     //top
     ,new wall(700,400,97,76,'./nennho.jpg'),new wall(1000,400,97,76,'./nennho.jpg')
    
    
    ]
    }
    if(map==4)
    {
        wall1 = [new wall(0,canvas.height-40,841,76,'./nendat.jpg'),new wall(421,canvas.height-40,841,76,'./nendat.jpg')
        ,new wall(842,canvas.height-40,841,76,'./nendat.jpg'),new wall(1600,canvas.height-40,841,76,'./nendat.jpg'),
        new wall(2000,canvas.height-40,841,76,'./nendat.jpg')]
    }

}
//-------------------------------------------
const gravity = 0.5
const keys ={
    left: false,
    right:false,
    up: false
}
var amthanh = new Audio()
amthanh.src ='./audio.mp3'
var music = true
amthanh.autoplay = true

var button = document.createElement("input");
button.type = "checkbox"
button.innerHTML = "ON/OFF MUSIC";
button.style.position = "absolute";
button.style.top = "100px";
button.style.right = "50px";
button.style.width = '60px'
button.style.height = '60px'
document.body.appendChild(button);
//---------------------------
var button1 = document.createElement("button");
button1.innerHTML = "Save";
button1.style.position = "absolute";
button1.style.top = "200px";
button1.style.right = "50px";
button1.style.width = '60px'
button1.style.height = '60px'
document.body.appendChild(button1);
button.onclick = function()
{
    if(music)
    {
        music=false
        amthanh.pause()
        
    }
    else if(music==false)
    {
        music=true
        amthanh.play()
        
    }
}


//---------------------------------------------
class player
{
    constructor()
    {
        this.position ={
            x: canvas.width -100,
            y: 1000
        }
        this.velocity ={
            x:0,
            y:10
        }
        this.width = 55
        this.height = 105
        this.image = new Image()
        this.image.src = './img/mainidler.png'
        //idle
        this.imageidler = new Image()
        this.imageidler.src = './img/mainidler.png'
        this.imageidlel = new Image()
        this.imageidlel.src = './img/mainidlel.png'
        //run
        this.imagerr = new Image()
        this.imagerr.src = './img/mainrunr.png'
        this.imagerl = new Image()
        this.imagerl.src = './img/mainrunl.png'
        //fall
        this.imagefr = new Image()
        this.imagefr.src = './img/mainfallr.png'
        this.imagefl = new Image()
        this.imagefl.src = './img/mainfalll.png'
        //jump
        this.imagejr = new Image()
        this.imagejr.src = './img/mainjumpr.png'
        this.imagejl = new Image()
        this.imagejl.src = './img/mainjumpl.png'
        //hit
        // this.imagehit= new Image()
        // this.imagehit.src = './img/mainhit.png'
        this.framex = 32
        this.framey = 34
        this.tg2 = 0
        this.tg1 = 1
        this.tg3 = 0
        this.max = 1
    }
    drawr()
    {
        c.drawImage(this.image,
            this.framex*this.tg2,
            0,
            this.framex,
            this.framey,
            this.position.x-20,
            this.position.y-10,
            69.75+30,
            89.4+30)
    }
    drawl()
    {
        
        c.drawImage(this.image,
            this.image.width - this.framex*this.tg1,
            0,
            this.framex,
            this.framey,
            this.position.x-20,
            this.position.y-10,
            69.75+30,
            89.4+30)
    }
    drawu()
    {
        
        c.drawImage(this.image,
            0,
            0,
            this.framex,
            this.framey,
            this.position.x-20,
            this.position.y-10,
            69.75+30,
            89.4+30)
    }
    hoatdong()
    {
      this.tg3++
      if(this.tg3%5==0)
      {
        if(this.tg2 < this.max+5)
        {
          this.tg2++
        }
        else this.tg2 = 0
      }
      if(this.tg3%5==0)
      {
        if(this.tg1 < this.max+5)
        {
          this.tg1++
        }
        else this.tg1 = 1
      }
    }
    update()
    {
        this.hoatdong()
        if(this.image == this.imageidler || this.image == this.imagerr)
        {
            this.drawr()
        }
        else if (this.image == this.imageidlel || this.image == this.imagerl)
        {
            this.drawl()
        } 
        else if(this.image==this.imagejl||this.image == this.imagejr
            ||this.image==this.imagefr||this.image==this.imagefl)
        {
            this.drawu()
        }
       else this.drawr()
       if(this.velocity.x > 0)
       {
        this.image = this.imagerr
       }
       else if(this.velocity.x < 0)
       {
        this.image = this.imagerl
       }
       if(this.velocity.x ==0)
       {
        if(this.image == this.imagerr)
        {
            this.image = this.imageidler
        }
        else if(this.image == this.imagerl)
        {
            this.image = this.imageidlel
        }
       }
       


        this.position.x +=this.velocity.x
        this.position.y += this.velocity.y
        
          this.velocity.y += gravity
        
        
    }
    
}
canvas.onclick = function()
{
    console.log("hhhhh")
}
//--------------------------wall-----------------------------
class wall
{
    constructor(x,y,x2,x3,image1)
    {
        this.position = {
            x ,
            y
        }
        this.width = x2
        this.height = x3
        this.image = new Image()
        this.image.src = image1
        
    }
    draw()
    {
        c.drawImage(this.image,this.position.x,this.position.y)
}
}
//------------------------move----------------------
window.addEventListener('keydown',(event) =>
{
    switch(event.key)
    {
        case 'd': 
        keys.left = false
        keys.right = true
        
        break
        case 'a':
            keys.right = false
             keys.left = true
        
        break
        case ' ' :
            keys.up = true
            player1.velocity.x = 0
            if(dem<=80&&player1.velocity.y ==0

                ) 
            {
                dem = dem +4
            }   
        break
        
        
    }
}
)
window.addEventListener('keyup',(event) =>
{
    switch(event.key)
    {
        case 'd' :keys.right = false
        break
        case 'a' : keys.left = false
        break
        case ' ' : 
        if(dem>4&&dem<80)
        {
            player1.velocity.y = -(dem/4)
        }
        else if(dem>=80)
        {
            player1.velocity.y = -20
            dem = 0
        }
        dem =0
        //----------------jump-----------------------------------------------------------------
        if(player1.image == player1.imageidler||player1.imag==player1.imagerr)
        {
            player1.image = player1.imagejr
        }
        else if(player1.image == player1.imageidlel||player1.imag==player1.imagerl)
        {
            player1.image = player1.imagejl
        }
        //-----fall------------------------------------------------------------------------------
        if(player1.image==player1.imagejr)
        {
            player1.image = player1.imagefr
             
        }
        if(
           player1.image ==player1.imagejl
        )
        {player1.image = player1.imagefl
            }
            keys.up = false
    }
})
var map= 1

    //nen duoi
        var wall1 = []  
        mapp()


const player1 = new player()
function nextmap()
{
    player1.position.y = canvas.height - player1.height
    if(map==1)
    {
        map=2
       
    }
    else if(map==2)
    {
        map=3
    }
    else if(map==3)
    {
        map=4
    }



}

function premap()
{
    player1.position.y = -player1.height
    if(map==3)
    {
        map=2
    }
    else if(map==2)
    {
        map=1
    }
    
}


//----------------main--------------------

function animate()
{
    requestAnimationFrame(animate)
    c.drawImage(bg,0,0)
    player1.update()
   
    wall1.forEach(wall=>
    {
        wall.draw()
    })
    //-----------keys-------------------
if(keys.left && keys.up==false)
{
    player1.velocity.x = -6
    if(player1.position.x - 10<0)
{
    player1.velocity.x =0
}
}
else if(keys.right&&keys.up==false)
{
    player1.velocity.x = 6
    if(player1.position.x + 60 >canvas.width )
{
    player1.velocity.x =0
}    
}

else player1.velocity.x = 0
//----------------tuong---------------------

wall1.forEach((wall)=>
    {
        if(player1.position.y + player1.velocity.y < wall.position.y+30
            &&player1.position.y+player1.height+player1.velocity.y>wall.position.y&&
            player1.position.x+player1.width>wall.position.x&&
            player1.position.x < wall.position.x+wall.width
            
            )
            {
                player1.velocity.y = 3 + gravity
            }
         if (player1.position.y < wall.position.y+wall.height
                &&player1.position.y+player1.height+player1.velocity.y>wall.position.y&&
                player1.position.x+player1.width>wall.position.x&&
                player1.position.x < wall.position.x+wall.width
                
                )
                {
                    player1.velocity.y = 6 + gravity
                }
         if (player1.position.x+player1.width+player1.velocity.x >= wall.position.x
            &&player1.position.x + player1.velocity.x <= wall.position.x + wall.width
            &&
            player1.position.y+player1.height>=wall.position.y&&
            player1.position.y <= wall.position.y+wall.height
            
                
                )
                {
                    player1.velocity.x = 0
                
                }

        

        
        if(player1.position.y + player1.height <= wall.position.y
            &&player1.position.y+player1.height+player1.velocity.y>=wall.position.y&&
            player1.position.x+player1.width>=wall.position.x&&
            player1.position.x <= wall.position.x+wall.width
            
            )
        {
            if(player1.image == player1.imagefl)
            {
                player1.image = player1.imageidlel
            }
            else if(player1.image == player1.imagefr)
            {
                player1.image = player1.imageidler
            }
            player1.velocity.y=0
        }
      
        
           
    })
    if(player1.position.y + player1.height <0)
    {
        for(i=0;i<30;i++)
        {wall1.splice(i,1)
        }
       nextmap()
       mapp()
       
        
    }
    else if(player1.position.y >canvas.height)
    {
        for(i=0;i<30;i++)
        {wall1.splice(i,1)
        }
        premap()
        mapp()
    }
    //-----------------------------------------

//---------------------------------------
c.fillStyle = 'yellow'
c.fillRect(player1.position.x-5,player1.position.y-10,dem,10)
console.log(map)
//------------------------------
c.save()
c.fillStyle= "blue"
c.font = "40px normal"
c.fillText("Tắt nhạc : ",2450,150)

if(map==2|| map==3)
{
    if(wall1[4].position.x-10<1100)
{
    rt = true
}
else if(wall1[4].position.x+wall1[4].width+10>canvas.width)
{
    rt = false
}
if(rt)
{
    
    wall1[4].position.x +=5
    if(player1.position.y  < wall1[4].position.y&&
        player1.position.y+50>wall1[4].position.y-wall1[4].height&&
            player1.position.x+player1.width>wall1[4].position.x&&
            player1.position.x < wall1[4].position.x+wall1[4].width
        )
    {
        player1.position.x+=5
        
    }
}
else 
{
    wall1[4].position.x -=5
    if(player1.position.y  < wall1[4].position.y&&
        player1.position.y+50>wall1[4].position.y-wall1[4].height&&
        player1.position.x+player1.width>wall1[4].position.x&&
            player1.position.x < wall1[4].position.x+wall1[4].width
        
        )
    {
        player1.position.x-=5
    }
}
} 

}

animate()