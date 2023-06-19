public class Main {
    public static void main(String[] args) {

        EagerSingleton es=EagerSingleton.getInstance();
        es.showMessage();

        StaticSingleton ss=StaticSingleton.getInstance();
        ss.showMessage();

        LazyInitialization ls=LazyInitialization.getInstance();
        ls.showMessage();

        ThreadSafeSingleton tss=ThreadSafeSingleton.getInstance();
        tss.showMessage();

        BillPlugSingleton bps=BillPlugSingleton.getInstance();
        bps.showMessage();
    }

}