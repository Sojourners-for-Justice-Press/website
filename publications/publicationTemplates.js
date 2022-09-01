const publicationDiv = Handlebars.compile(`
<div class="publicationDiv" id="{{urlTitle}}">
<p><a href="javascript:void(0)" onclick="openPage('{{urlTitle}}')"><span id="title">{{publicationTitle}}</span></a></p>
<p>by {{author}}</p>
<a href="javascript:void(0)" onclick="openPage('{{urlTitle}}')"><img src="../publications/asset/{{img}}" alt="{{imgAltText}}"></a> <br>
</div>
`)
const publicationDetailTemplate = Handlebars.compile(`
<a href="javascript:void(0)" onclick="hidePublicationDetail()"><span class="close"></span></a>
<h1 id="publicationTitle">{{publicationTitle}}</h1>
<h2 id="publicationAuthor">{{author}}</h2>
<div class="carousel">
<img id="publicationImg" src="asset/{{img}}" alt="{{imgAltText}}"/>
{{#if img1}}<img id="publicationImg" src="asset/{{img1}}" alt="{{img1AltText}}"/>{{/if}}
{{#if img2}}<img id="publicationImg" src="asset/{{img2}}" alt="{{img2AltText}}"/>{{/if}}
{{#if img3}}<img id="publicationImg" src="asset/{{img3}}" alt="{{img3AltText}}"/>{{/if}}
{{#if img4}}<img id="publicationImg" src="asset/{{img4}}" alt="{{img4AltText}}"/>{{/if}}
{{#if img5}}<img id="publicationImg" src="asset/{{img5}}" alt="{{img5AltText}}"/>{{/if}}
{{#if img6}}<img id="publicationImg" src="asset/{{img6}}" alt="{{img6AltText}}"/>{{/if}}
</div>

<a class="button" href="{{purchaseLink}}">{{price}} via Haymarket Books</a> <br>
<p id="description">
    {{description}}
</p>
<br>   
<ul class="publication-details">
    {{#if author}}<li>Author(s): {{author}}</li>{{/if}}
    {{#if designer}}<li>Designer: <a href="{{designerLink}}">{{designer}}</a></li>{{/if}}
    {{#if coverArtist}}<li>Cover artist: <a href="{{coverArtistLink}}">{{coverArtist}}</a></li>{{/if}}
    {{#if printer}}<li>Printer: <a href="{{printerLink}}">{{printer}}</a></li>{{/if}}
    {{#if readLink}}<li>Digital version: <a href="{{readLink}}">Accessible via {{readLinkTitle}}</a></li>{{/if}}
    <li>Category: {{category}}</li>
    <li>Language: {{language}}</li>
    <li>Date: {{date}}</li>
    <li>Edition: {{edition}}</li>
    <li>Page count: {{pages}}</li>
    <li>Dimensions: {{dimensions}}</li>
    <li>Process: {{process}}</li>
    <li>Cover: {{cover}}</li>
</ul>
`)