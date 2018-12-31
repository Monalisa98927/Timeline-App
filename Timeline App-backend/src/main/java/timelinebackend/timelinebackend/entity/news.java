package timelinebackend.timelinebackend.entity;

import java.util.Date;

public class news {

    private int id;
    private String content;
    private String imageURL;
    private String author;
    private String time;

    public news(int id, String content, String imageURL, String author, String time) {
        this.id=id;
        this.content=content;
        this.author=author;
        this.imageURL=imageURL;
        this.time=time;
    }

}
