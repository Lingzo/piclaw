Feature: Compaction indicator and model switching
  As a user monitoring context usage
  I want the compaction indicator to update instantly during and after compaction
  And I want to switch to a smaller context model immediately after compaction

  Background:
    Given I am authenticated and on the main chat

  # ── Compaction indicator ──

  Scenario: Context pie shows compaction label when compacting
    Given the agent is performing a compaction
    Then the context pie button should have the "is-compacting" class
    And the context pie should show an elapsed timer (e.g. "0:05")
    And the context pie aria-label should mention "Smart compaction"

  Scenario: Compaction status updates in real-time via SSE
    Given a compaction_start SSE event is received
    Then the compose bar should show the compaction title
    And the elapsed timer should start counting
    When a compaction_end SSE event is received
    Then the compaction indicator should clear
    And the compose bar should return to normal state

  Scenario: Abort button shows compacting spinner during compaction
    Given the agent is compacting
    Then the abort/stop button should be in "compacting" mode
    And the button should show a compacting spinner
    And clicking abort should cancel the compaction

  Scenario: Context pie usage updates after compaction completes
    Given the context was at 85% usage
    When compaction completes successfully
    Then the context pie should reflect the reduced usage
    And the usage percentage should be lower than before

  Scenario: Compaction suppressed shows backoff notice
    Given compaction has failed recently
    When a compaction_suppressed event is received
    Then the status notice should show "Compaction temporarily suppressed"
    And the detail should include failure count or retry timing

  # ── Model switching after compaction ──

  Scenario: Model switcher is responsive during compaction
    Given compaction is in progress
    Then the model button in the compose bar should be clickable
    And the model popup/settings should open normally

  Scenario: Switch to a smaller model immediately after compaction
    Given compaction has just completed
    When I open the model switcher
    And I select a smaller context model
    Then the model should switch without delay
    And the compose bar should show "Switching…" then the new model name
    And the context usage should update for the new model's window

  Scenario: Model switch via /model command works during idle
    When I type "/model opencode/gpt-4.1-nano" and press Enter
    Then the compose bar model label should update to the new model
    And no error should appear in the timeline
