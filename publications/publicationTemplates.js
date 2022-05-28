const publicationDiv = Handlebars.compile(`
<div class="publicationDiv" id="{{urlTitle}}">
<p><a href="javascript:void(0)" onclick="openPage('{{urlTitle}}')"><span id="title">{{publicationTitle}}</span></a></p>
<p>by {{author}}</p>
<img src="../publications/asset/{{img}}" alt="{{imgAltText}}"> <br>
</div>
`)
const publicationDetailTemplate = Handlebars.compile(`
<h1 id="publicationTitle">{{publicationTitle}}</h1>
<h2 id="publicationAuthor">{{author}}</h2>
<div class="carousel">
<img id="publicationImg" src="asset/{{img}}" alt="{{imgAltText}}"/>
{{#if img1}}<img id="publicationImg" src="asset/{{img1}}" alt="{{img1AltText}}"/>{{/if}}
{{#if img2}}<img id="publicationImg" src="asset/{{img2}}" alt="{{img2AltText}}"/>{{/if}}
{{#if img3}}<img id="publicationImg" src="asset/{{img3}}" alt="{{img3AltText}}"/>{{/if}}
</div>
<ul class="publication-details">
    <li>Publication date: {{date}}</li>
    <li>Page Count: {{pages}}</li>
    <li>Dimensions: {{dimensions}}</li>
    <li>Category: {{category}}</li>
    <li>Price: {{price}}</li>
</ul>
<a class="button" href="{{purchaseLink}}">{{price}} on Haymarket Books</a> <br>
<p id="description">
    {{description}}
</p>
<br>   
<ul class="publication-credits">
    {{#if author}}<li>Author: {{author}}</li>{{/if}}
    {{#if designer}}<li>Designer: <a href="{{designerLink}}">{{designer}}</a></li>{{/if}}
    {{#if coverArtist}}<li>Cover artist: <a href="{{coverArtistLink}}">{{coverArtist}}</a></li>{{/if}}
</ul>
`)