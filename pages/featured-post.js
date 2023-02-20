import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Sidebar from '../components/sidebar';
import Image from 'next/image'

export default function Post(){ 
  
   const content="I’ll take you right where it all started. Here I was stuck in a very small city with my family. It was five months into the pandemic. I was recreating myself after I ended a year and a half relationship. And since I needed my time I had no complaints about not being able to go out. \n I consider myself a selective ambivert which means I choose the moment to be an introvert or an extravert. And most of the my activities and hobbies can be done inside even sports because I have all the equipments I need and a big patio. \n I took advantage of this time and started to exercise -so as not to gain so much weight-, meditate, read, learn and grow as a human being. And I recorded every thing I did throughout the pandemic. \n But I was still enrolled to college and was trying to get my degree on Korean Studies. Besides keeping up with my online classes, I deep dived into researching about web development’s basics and where to start. Every developer has their own journey but I guess HTML, CSS and JavaScript’ basics is everyone’s starting point. And that’s where I started , too. \n When you start to learn new things you usually do it alone but in tech there are communities that will guide you and help you improve your skills. There are a lot of platforms to choose for joining a community to your liking. \n  I joined a couple of discord servers and learned a lot from others. I even joined a study with me server to keep myself focused when learning. I also found a web development course which is taught by Angela YU. Her life was and still is an inspiration to me and I believe she can taught anything to anybody and her British accent helps, too. \n The first thing I learned was how to learn anything by yourself. You see at school they make us memorise stuff so we keep those informations for a short period of time and then forget all of it. Therefore we never learn them. But that is not how learning process works. \n Everyone has their own learning methods which you gain them by constantly learning new things in different areas. I am a person who constantly reads and do researches on topics that pick my interest and writes about them so I constantly learn every day. \n  When web development and tech world called for me what I did was to start learning everything there is to know. \n After I learned the basics I started a full-stack development course which taught me my first ever programming language: C#. \n I actually learned a lot about building .net console apps and web apps from this course. C# was a great language to start learning because it is object-oriented which gave me the knowledge I needed to know about object-oriented programming. \n  After learning and doing a couple of group projects using C# it was time to start with databases and frameworks. We did not continue learning with .net frameworks intead we changed course to a new language and a whole new framework: Php and Laravel. \n Since I already knew a computer language and how it operates it was not hard to implement that with php but a new framework seemed really hard and I didn’t understand the need to read documentations either. This is why probably it was hard for me to learn these new concepts at first. Then like every other developer I started to actually read documentations. \n  Reading a lot of docs was not enough on its own. Because when you are new to development you might not even know what you don’t know. Aside from reading docs you are going to need to learn how to read and examine the code. Read the code, examine it, copy it to your own ide to see if it works properly, then write your own. If you really want to learn you are going to need to read and write a lot of code. At least that is what I did and I keep doing it even now. \n Laravel, in my opinion is a framework that has its own mind. It has its own ways and you can’t bend its rules that much. It takes care of almost all the work for you. You don’t even need to do much coding in it. \n PHP is an awesome computer language but you don’t even need to learn PHP for Laravel or SQL-you won’t need to use raw SQL that much with laravel because it has a query builder which can come in handy at times- for that matter. Yes, it has a proper authentication & authorisation system and the web apps you built with it will be exceptionally faster. \n In my case I did not use it other than making an e-commerce application on the course I was taking and later on I only used it to build a blog page. \n Using laravel was a different experience but after the course I went my own way and tried many different frameworks but my favourite was Express. I discovered this framework after a month of JavaScipt coding challenge. \n Express is a framework written in JavaScript and hosted within the Node.js environment. And it is almost opposite of Laravel. You can create full applications and Rest APIs as well which is exactly what I needed. With Express you can do things under the hood that Laravel doesn’t allow you to do which is great for me because I like to be in charge of the coding. \n I have been building web apps using Express and MongoDB for months now. I also dabble in designing and developing games in unreal engine but *insert whining noises* C++ is really making me work for it. On the plus side I have been writing my own documentations while learning C++ and unreal engine. At the end of the day it is all worth it. \n I am still learning a lot I guess the next thing to learn about would probably be web3 based development to stay relevant. I will keep learning and keep sharing my journey with you. I hope this gives you a place to start and know there are people like you out here that is on a new journey and feels the way you and I do: “clueless”. \n   ";

    const paragraphs = content.split("\n");
  return (
    <div>
       <div >
        
        <div>
      <Head>
        <title>Post | Blog</title>
        <link rel="icon" href="/puzzle.png" />
        <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />


      </Head>
     
       
     <div className="h-screen w-full bg-white relative flex overflow-hidden">

    <Sidebar />



   <div className=" font-mono w-full h-full flex flex-col justify-between">
  
    <Header />

    <main className="max-w-full h-full flex relative overflow-x-hidden">

      <div  className="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4">

      <section className="text-gray-600 body-font ">
            
             <div   className='popup-writer mt-1 ml-28 p-5'>
              <div>
                
              <Image className='mx-auto py-10'  width={250} height={200} src='/cat.webp' alt='cat' />
              </div>
             <span className="writer text-gray-500 text-sm">Jigsaw By S. KARACA</span> 
             <br></br>
             <span className="date ml-16 text-gray-500 text-sm">July 4, 2022</span>

             </div>
             
              <div className="container  py-10 mx-auto">
               <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto">
              
               <h1 className='font-mono text-black text-2xl title-font font-bold mb-2 hover:text-purple-300 '>  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
               <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
               </svg>  Pandemic Developer</h1>

               <h2 className="mb-3 text-xl font-bold text-gray-500 dark:text-gray-400">
               Of course when I say “Pandemic” developer it is a reference to the time I started my journey to become a developer. It might feel like ages ago right now but there was a time we all caged up in our little -in some cases quite large- houses for quite a long time, and we couldn’t see the end of it. After some time -and I really want to believe this goes for everyone- we started looking inward and get to know ourselves and what we are meant to do. At least that is what happened to me.
                </h2>    
          
               {paragraphs.map((p, i) => (
                  <p className="mb-3 text-lg font-light text-gray-500 dark:text-gray-400" key={i}>{p}</p>
                     ))}


              <div className='text-center'>
              <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-8 mb-6"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">S. KARACA</h2>
               <p className="text-gray-500">Full-Stack Developer</p>
              </div>
               </div> 
           </div>
          
           
          </section>
           
     
    </div>






    





  </main>
</div>

</div>

<style>{`
    @media screen and (min-width:1200px){
      .popup-content {
        height:37.8rem;
        border-radius:2px;
        transform: translate(-50%, -50%);
        background-color:#F4F9F9;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px;
        z-index: 1; 
        color:black;
        width:80.3rem;
        
    }
    .container{
       position:absolute;
        top:7%;
        left:12%;
    }
   .popup-writer{
      margin-top:0.25rem;
      margin-left:7rem;
      padding:1.25rem;
    }

     }
     @media (min-width: 768px) and (max-width: 1200px) {
        .popup-content {
        height:37.8rem;
        border-radius:2px;
        transform: translate(-50%, -50%);
        background-color:#F4F9F9;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px;
        z-index: 1; 
        color:black;
        width:45rem;
        
    }
      .container{
        position:absolute;
        top:70%;
        width:55%
        left:25%;
        padding : 0 2rem 0 2rem
      }
      .title{
        padding:0
      }.popup-writer{
        margin-top:3rem;
        margin-left:11rem;
       

       }
       .date{
        margin-left:18.4rem;
      }
      .writer{
        margin-left:15.1rem;
      }
      
 }
  @media screen and (max-width:768px){
      .popup-content {
        height:37.8rem;
        border-radius:2px;
        transform: translate(-50%, -50%);
        background-color:#F4F9F9;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px;
        z-index: 1; 
        color:black;
        width:27rem;
        
    }
    .container{
      position:absolute;
      top:60%;
      width:55%
      left:12%;
      padding : 0 2rem 0 2rem
    }
    .title{
      padding:0
    }.popup-writer{
      margin-top:0.25rem;
      margin-left:7rem;
     

     }.popup-writer{
      margin-top:3rem;
      margin-left:4rem;
     

     }
     .date{
      margin-left:5.5rem;
    }.writer{
      margin-left:2.2rem;
    }
  }
    
      `}</style>
 


      
    </div>
         
         
         
         </div>
         
         
         



      

    
    </div>
  );
 }