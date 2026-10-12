package runners;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class   UsersRunnerTest {

    @Test
    void testParallel() {
        Results results = Runner.path("classpath:user")
                .parallel(6);

        assertEquals(0, results.getFailCount(), results.getErrorMessages());
    }
}


