<?php namespace App\Games;

use App\Models\Game;
use App\Games\Kernel\GameCategory;
use App\Games\Kernel\Module\General\Wrapper\MultiplierCanBeLimited;
use App\Games\Kernel\ProvablyFairResult;
use App\Games\Kernel\Module\General\HouseEdgeModule;
use App\Games\Kernel\Quick\QuickGame;
use App\Games\Kernel\Quick\SuccessfulQuickGameResult;
use App\Games\Kernel\Metadata;
use App\Games\Kernel\ProvablyFair;
use App\Games\Kernel\Data;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

class Plinko extends QuickGame implements MultiplierCanBeLimited {

  function metadata(): Metadata {
    return new class extends Metadata {
      public function id(): string {
        return "plinko";
      }

      public function name(): string {
        return "Plinko";
      }

      public function icon(): string {
        return "fas fa-bullseye";
      }

      public function category(): array {
        return [GameCategory::$originals, GameCategory::$instant];
      }

      public function image(): string {
        return "/img/game/plinko.png";
      }
    };
  }

  public function start($user, Data $data) {
    return new SuccessfulQuickGameResult((new ProvablyFair($this))->result(), function (SuccessfulQuickGameResult $result, array $transformedResults) use ($user, $data) {
      $pins = intval($data->game()->pins);
      $number = $transformedResults[$pins - 8];

      $result->win($user, $data, $this->data()[$data->game()->difficulty][$data->game()->pins][$number]);
      $result->delay($pins * 360);
      return [
        'difficulty' => $data->game()->difficulty,
        'pins' => $pins,
        'bucket' => $number,
        'delay' => $pins * 20
      ];
    });
  }

  public function data(): array {
    if (!Cache::has('phoenix:plinkoMultipliers:' . HouseEdgeModule::get($this, 1.00))) {
      $output = [
        'low' => [
          8 => $this->applyHouseEdge([
            5.6, 2.1, 1.1, 1.0, 0.5, 1.0, 1.1, 2.1, 5.6
          ]),
          9 => $this->applyHouseEdge([
            5.6, 2.0, 1.6, 1.0, 0.7, 0.7, 1.0, 1.6, 2.0, 5.6
          ]),
          10 => $this->applyHouseEdge([
            8.9, 3.0, 1.4, 1.1, 1.0, 0.5, 1.0, 1.1, 1.4, 3.0, 8.9
          ]),
          11 => $this->applyHouseEdge([
            8.4, 3.0, 1.9, 1.3, 1.0, 0.7, 0.7, 1.0, 1.3, 1.9, 3.0, 8.4
          ]),
          12 => $this->applyHouseEdge([
            10.0, 3.0, 1.6, 1.4, 1.1, 1.0, 0.5, 1.0, 1.1, 1.4, 1.6, 3.0, 10.0
          ]),
          13 => $this->applyHouseEdge([
            8.1, 4.0, 3.0, 1.9, 1.2, 0.9, 0.7, 0.7, 0.9, 1.2, 1.9, 3.0, 4.0, 8.1
          ]),
          14 => $this->applyHouseEdge([
            7.1, 4.0, 1.9, 1.4, 1.3, 1.1, 1.0, 0.5, 1.0, 1.1, 1.3, 1.4, 1.9, 4.0, 7.1
          ]),
          15 => $this->applyHouseEdge([
            15.0, 8.0, 3.0, 2.0, 1.5, 1.1, 1.0, 0.7, 0.7, 1.0, 1.1, 1.5, 2.0, 3.0, 8.0, 15.0
          ]),
          16 => $this->applyHouseEdge([
            16.0, 9.0, 2.0, 1.4, 1.4, 1.2, 1.1, 1.0, 0.5, 1.0, 1.1, 1.2, 1.4, 1.4, 2.0, 9.0, 16.0
          ])
        ],
        'medium' => [
          8 => $this->applyHouseEdge([
            13.0, 3.0, 1.3, 0.7, 0.4, 0.7, 1.3, 3.0, 13.0
          ]),
          9 => $this->applyHouseEdge([
            18.0, 4.0, 1.7, 0.9, 0.5, 0.5, 0.9, 1.7, 4.0, 18.0
          ]),
          10 => $this->applyHouseEdge([
            22.0, 5.0, 2.0, 1.4, 0.6, 0.4, 0.6, 1.4, 2.0, 5.0, 22.0
          ]),
          11 => $this->applyHouseEdge([
            24.0, 6.0, 3.0, 1.8, 0.7, 0.5, 0.5, 0.7, 1.8, 3.0, 6.0, 24.0
          ]),
          12 => $this->applyHouseEdge([
            33.0, 11.0, 4.0, 2.0, 1.1, 0.6, 0.3, 0.6, 1.1, 2.0, 4.0, 11.0, 33.0
          ]),
          13 => $this->applyHouseEdge([
            43.0, 13.0, 6.0, 3.0, 1.3, 0.7, 0.4, 0.4, 0.7, 1.3, 3.0, 6.0, 13.0, 43.0
          ]),
          14 => $this->applyHouseEdge([
            58.0, 15.0, 7.0, 4.0, 1.9, 1.0, 0.5, 0.2, 0.5, 1.0, 1.9, 4.0, 7.0, 15.0, 58.0
          ]),
          15 => $this->applyHouseEdge([
            88.0, 18.0, 11.0, 5.0, 3.0, 1.3, 0.5, 0.3, 0.3, 0.5, 1.3, 3.0, 5.0, 11.0, 18.0, 88.0
          ]),
          16 => $this->applyHouseEdge([
            110.0, 41.0, 1.0, 5.0, 3.0, 1.5, 1.0, 0.5, 0.3, 0.5, 1.0, 1.5, 3.0, 5.0, 10.0, 41.0, 110.0
          ])
        ],
        'high' => [
          8 => $this->applyHouseEdge([
            29.0, 4.0, 1.5, 0.3, 0.2, 0.3, 1.5, 4.0, 29.0
          ]),
          9 => $this->applyHouseEdge([
            43.0, 7.0, 2.0, 0.6, 0.2, 0.2, 0.6, 2.0, 7.0, 43.0
          ]),
          10 => $this->applyHouseEdge([
            76.0, 10.0, 3.0, 0.9, 0.3, 0.2, 0.3, 0.9, 3.0, 10.0, 76.0
          ]),
          11 => $this->applyHouseEdge([
            120.0, 14.0, 5.2, 1.4, 0.4, 0.2, 0.2, 0.4, 1.4, 5.2, 14.0, 120.0
          ]),
          12 => $this->applyHouseEdge([
            170.0, 24.0, 8.1, 2.0, 0.7, 0.2, 0.2, 0.2, 0.7, 2.0, 8.1, 24.0, 170.0
          ]),
          13 => $this->applyHouseEdge([
            260.0, 37.0, 11.0, 4.0, 1.0, 0.2, 0.2, 0.2, 0.2, 1.0, 4.0, 11.0, 37.0, 260.0
          ]),
          14 => $this->applyHouseEdge([
            420.0, 56.0, 18.0, 5.0, 1.9, 0.3, 0.2, 0.2, 0.2, 0.3, 1.9, 5.0, 18.0, 56.0, 420.0
          ]),
          15 => $this->applyHouseEdge([
            620.0, 83.0, 27.0, 8.0, 3.0, 0.5, 0.2, 0.2, 0.2, 0.2, 0.5, 3.0, 8.0, 27.0, 83.0, 620.0
          ]),
          16 => $this->applyHouseEdge([
            1000.0, 130.0, 26.0, 9.0, 4.0, 2.0, 0.2, 0.2, 0.2, 0.2, 0.2, 2.0, 4.0, 9.0, 26.0, 130.0, 1000.0
          ])
        ]
      ];

      Cache::forever('phoenix:plinkoMultipliers:' . HouseEdgeModule::get($this, 1.00), json_encode($output));
    }
    return json_decode(Cache::get('phoenix:plinkoMultipliers:' . HouseEdgeModule::get($this, 1.00)), true);
  }

  public function isLoss(ProvablyFairResult $result, Data $data): bool {
    return $this->data()[$data->game()->difficulty][$data->game()->pins][$result->result()[intval($data->game()->pins) - 8]] <= 1;
  }

function result(ProvablyFairResult $result): array {
    $output = [];
    for ($i = 8; $i <= 16; $i++) {
        $directions = [0, 1]; // Left, Right
        $data = [];
        $floats = $result->extractFloats(16);
        $plinkoGrid = [];

        for ($j = 0; $j < $i; $j++) {
            array_push($data, $directions[floor($floats[$j] * 2)]);
            array_push($plinkoGrid, range(0, $j));
        }

        $currentPosition = 0;
        $gravity = 0.5; // Adjust gravity as needed
        $deceleration = 0.1; // Adjust deceleration factor as needed
        $speed = 0; // Initial speed
        $bounceFactor = 0.8; // Adjust bounce factor as needed
        $lastDirection = 0; // Track last direction of movement
        for ($j = 0; $j < $i; $j++) {
            if ($data[$j] == 1) {
                // Ball hits a peg
                $currentPosition++;
                // Simulate bounce
                $speed *= -$bounceFactor; // Reverse direction and reduce speed
                $lastDirection = $speed > 0 ? 1 : -1; // Track direction of movement after bounce
            } else {
                // Apply gravity
                if (rand(0, 100) < 50) {
                    // Ball moves to the right
                    $currentPosition += $speed;
                } else {
                    // Ball moves to the left
                    $currentPosition -= $speed;
                }
                // Apply deceleration
                $speed -= $deceleration;
                // Ensure the ball stays within bounds
                $currentPosition = max(0, min($currentPosition, $i - 1));
            }
        }

        array_push($output, $currentPosition);
    }
    return $output;
}


  public function multiplier(?Game $game, ?Data $data, ProvablyFairResult $result): float {
    return $this->data()[$data->game()->difficulty][$data->game()->pins][$result->result()[intval($data->game()->pins) - 8]];
  }

  public function getBotData(): array {
    return [
      'difficulty' => mt_rand(0, 100) <= 50 ? 'low' : (mt_rand(0, 100) <= 50 ? 'medium' : 'high'),
      'pins' => mt_rand(8, 16)
    ];
  }

}
