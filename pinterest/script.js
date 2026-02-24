
image=document.querySelector(".image-section");

let arr = [
    {
      name: "Petals of Roses",
      source: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Animals of Town",
      source: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Majestic Lion",
      source: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Cute Puppy",
      source: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Wild Tiger",
      source: "https://images.unsplash.com/photo-1549366021-9f761d040a94?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Mountain Landscape",
      source: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "City Lights",
      source: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Ocean Waves",
      source: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Snowy Forest",
      source: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Golden Sunset",
      source: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Running Horse",
      source: "https://images.unsplash.com/photo-1501706362039-c6b2a5d9a2b3?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Peaceful Lake",
      source: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Colorful Parrot",
      source: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Desert Safari",
      source: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Modern Architecture",
      source: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Petals of Roses",
      source: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Animals of Town",
      source: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Majestic Lion",
      source: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Cute Puppy",
      source: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Wild Tiger",
      source: "https://images.unsplash.com/photo-1549366021-9f761d040a94?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Mountain Landscape",
      source: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "City Lights",
      source: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Ocean Waves",
      source: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Snowy Forest",
      source: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Golden Sunset",
      source: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Running Horse",
      source: "https://images.unsplash.com/photo-1501706362039-c6b2a5d9a2b3?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Peaceful Lake",
      source: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Colorful Parrot",
      source: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Desert Safari",
      source: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Modern Architecture",
      source: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Petals of Roses",
      source: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Animals of Town",
      source: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Majestic Lion",
      source: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Cute Puppy",
      source: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Wild Tiger",
      source: "https://images.unsplash.com/photo-1549366021-9f761d040a94?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Mountain Landscape",
      source: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "City Lights",
      source: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Ocean Waves",
      source: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Snowy Forest",
      source: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Golden Sunset",
      source: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Running Horse",
      source: "https://images.unsplash.com/photo-1501706362039-c6b2a5d9a2b3?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Peaceful Lake",
      source: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Colorful Parrot",
      source: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Desert Safari",
      source: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Modern Architecture",
      source: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Petals of Roses",
      source: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Animals of Town",
      source: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Majestic Lion",
      source: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Cute Puppy",
      source: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Wild Tiger",
      source: "https://images.unsplash.com/photo-1549366021-9f761d040a94?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Mountain Landscape",
      source: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "City Lights",
      source: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Ocean Waves",
      source: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Snowy Forest",
      source: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Golden Sunset",
      source: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Running Horse",
      source: "https://images.unsplash.com/photo-1501706362039-c6b2a5d9a2b3?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Peaceful Lake",
      source: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Colorful Parrot",
      source: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Desert Safari",
      source: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Modern Architecture",
      source: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=700&auto=format&fit=crop"
    }
  ];


function GenerateImage() {

    arr.forEach(function (ele) {

        img=document.createElement("img");
        img.setAttribute("src",ele.source);
        image.append(img);

    })

}

GenerateImage();
search=document.querySelector("input");

search.addEventListener("change",function(e)
{
    console.log(e);
})
