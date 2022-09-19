function password_input()
{
    var password = "000000"
    for(var i = 0; i < password.length; i++)
    {
        var p = text(password[i].toString()).findOne().bounds();
        click(p.centerX(), p.centerY());
        sleep(500);
    }
}
if(!device.isScreenOn())
    {
    device.wakeUp();
    sleep(1000);
    swipe(700,2000,800,1000,300);
    sleep(500);
    password_input();
    sleep(500);
    launchApp('钉钉');
    sleep(2000);
    id("item_title").className("android.widget.TextView").text("待办").findOne().parent().clickCenter();
    sleep(2000);
    className("android.view.View").text("去提交").findOne().clickCenter();
    sleep(5000);
    className("android.widget.Button").untilFind().click();
    }
else
    {
    launchApp('钉钉');
    id("item_title").className("android.widget.TextView").text("待办").findOne().parent().clickCenter();
    className("android.view.View").text("去提交").findOne().clickCenter();
    sleep(5000);
    className("android.widget.Button").untilFind().click();
    }
