---
layout: page
---
<div class="index-artical">
    <ul class="index-left">
        {% for post in site.categories.note %}
            <li>
                <h2>
                    <a href="{{ post.url }}">{{ post.title }}</a>
                </h2>
                <span>{{ post.description }}</span>
            </li>
        {% endfor %}
    </ul>
    <ul class="index-mid"> </ul>
    <ul class="index-right"></ul>
</div>
<script type="text/javascript">
    $(function(){
        var height = $('.index-artical').height();
        $('.index-mid').height(height-90);
    });
</script>
